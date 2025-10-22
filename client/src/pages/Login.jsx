import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import LoadingComp from '../components/LoadingComp';

const Login = () => {

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const navigate = useNavigate()
  const[load,setLoad] = useState(false)
  const backendURL = import.meta.env.VITE_BACKEND_PORT
  const handleGoogleLogin = () => {
    // Redirect the user to the backend's Google authentication route
    window.location.href = `${backendURL}/api/auth/google`;
  };

  const sendOtp = async () => {
    try {
      setLoad(true)
      await axios.post(`${backendURL}/api/auth/send-otp`, { email })
      setStep(2)
      setLoad(false)
    } catch (error) {
      alert("Failed to send OTP")
      console.error(error)
    }
  }

  const verifyOtp = async () => {
    try {
      setLoad(true)
      const res = await axios.post(`${backendURL}/api/auth/verify-otp`, {email, otp })
      const token = res.data.token;
      localStorage.setItem("token", token);
      
      navigate('/home')
      setLoad(false)
    } catch (error) {
      alert("OTP verification failed")
      console.error(error)
    }
  }

  return (
    <div
    className=" flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins]"
    >
      <NavBar/>
      <div className="min-h-screen flex flex-col items-center justify-center">
        
          {step === 1 ? (
            <>

              <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Get Started Now</h2>
            <label htmlFor="email">Email</label>
            <input id="email"
             className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
              type="email" placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              {
                load &&(
                  <LoadingComp/>
                )
              }
              
            <button type="button"
             className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
             onClick={sendOtp}
             >Send OTP</button>
            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Sign-in Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 active:scale-95 transition py-2.5 rounded text-gray-800 font-medium hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.617-3.26-11.283-7.94l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              </svg>
              Sign in with Google
            </button>

            <p className="text-center mt-4">
              Don’t have an account? <span className="text-blue-500 underline">Signup Now</span>
            </p>
          </div>

            <p className="text-center mt-4">Don’t have an account? <span className="text-blue-500 underline">Signup Now</span></p>
            
       
        
            </>

            
          ) : (
            <>

              <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Email Verify OTP</h2>
             <p className="mt-2 text-sm text-gray-900/90 text-center">Enter the 6-digit code sent to your email ID.</p>
             <br />
            <input id="email"
             className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
              type="email" 
              placeholder="Enter the OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {
                load &&(
                  <LoadingComp/>
                )
              }
            <button type="button"
             className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
             onClick={verifyOtp}
             >Verify OTP</button>
            <p className="text-center mt-4">Enter otp and verify it !</p>
        </div>
              
            </>
          )}
        </div>
      
    </div>
  )
}

export default Login
