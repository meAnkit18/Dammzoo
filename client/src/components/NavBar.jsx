import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
   const frontendURL = import.meta.env.VITE_FRONTEND_PORT

  return (
    <motion.div
     initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <header 
      className="fixed top-1 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/30 backdrop-blur-md shadow-lg z-50 px-6  flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white">
    <a href='https://dammzoo.vercel.app/'>
        {/* <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg" /> */}
        <div className="flex items-center justify-center gap-2 ">
    <img
      className='h-10 w-10'
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicvIDK-bTt59nqzUA7MvwnU0P7Lb_cafaZfRTmcmDQnQ40fX-tCQTFlEHy60SgZygMmfDJkDk62RTLEmuTVcP0S0HS_Hgro07C1yzL5U0cnTOQhLlaJtVnI5-lN_teHvTX6hM0ahtbk4wR4ERNE3M4QZ8Y4G5-k-Qr3GfyIprvKqQ3U7f0ms8uaz8N2fE/s500/D-removebg-preview.png"
      alt=""
    />
    <h1 className="text-2xl font-semibold">Dammzoo</h1>
  </div>
    </a>
    <nav id="menu" class="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal">
        <a class="hover:text-indigo-600" href="#">
            Home
        </a>
        <a class="hover:text-indigo-600" href="#reviews">
            Reviews
        </a>
        <a class="hover:text-indigo-600" href="#faqs">
            FAQs
        </a>
        <a class="hover:text-indigo-600" href="about">
            About
        </a>
        <a class="hover:text-indigo-600" href="disclaimer">
            Disclaimer
        </a>
        <button id="closeMenu" class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </nav>
    <div class="flex items-center space-x-4">
        <div class="hidden md:flex  bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-900 transition cursor-pointer" onClick={()=> navigate('/login')}>
            Sign up
        </div>
        <button id="openMenu" class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>
</header>
    </motion.div>
  )
}

export default NavBar
