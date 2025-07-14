import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const sendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/send-otp', { email })
      setStep(2)
    } catch (error) {
      alert("Failed to send OTP")
      console.error(error)
    }
  }

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {email, otp })
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-[300px]">
        {step === 1 ? (
          <>
            <h2 className="text-xl mb-4 font-bold text-center">Login with OTP</h2>
            <input
              className="border p-2 mb-4 w-full rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='bg-amber-950'
              onClick={sendOtp}
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl mb-4 font-bold text-center">Enter OTP</h2>
            <input
              className="border p-2 mb-4 w-full rounded"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
            className='bg-amber-950'
              onClick={verifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
