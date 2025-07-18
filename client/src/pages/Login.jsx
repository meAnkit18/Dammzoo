import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Login = () => {

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const navigate = useNavigate()
  const backendURL = import.meta.env.VITE_BACKEND_PORT

  const sendOtp = async () => {
    try {
      await axios.post(`${backendURL}/api/auth/send-otp`, { email })
      setStep(2)
    } catch (error) {
      alert("Failed to send OTP")
      console.error(error)
    }
  }

  const verifyOtp = async () => {
    try {
      const res = await axios.post(`${backendURL}/api/auth/verify-otp`, {email, otp })
      const token = res.data.token;
      localStorage.setItem("token", token);
      
      navigate('/home')
      alert(res.data.message)
      // TODO: Save token or redirect
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
            <button type="button"
             className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
             onClick={sendOtp}
             >Send OTP</button>
            <p className="text-center mt-4">Don’t have an account? <span className="text-blue-500 underline">Signup Now</span></p>
        </div>
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
