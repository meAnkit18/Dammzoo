import React from 'react'
import { motion } from 'framer-motion'

function MainName() {
  return (
    // <div className='fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-2xs'>
    //   <img
    //   className='h-10 w-10 items-center'
    //   src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicvIDK-bTt59nqzUA7MvwnU0P7Lb_cafaZfRTmcmDQnQ40fX-tCQTFlEHy60SgZygMmfDJkDk62RTLEmuTVcP0S0HS_Hgro07C1yzL5U0cnTOQhLlaJtVnI5-lN_teHvTX6hM0ahtbk4wR4ERNE3M4QZ8Y4G5-k-Qr3GfyIprvKqQ3U7f0ms8uaz8N2fE/s500/D-removebg-preview.png" alt="" />
    //   <h1 className=" text-2xl my-3 font-semibold  text-center ">Dammzoo</h1>
    // </div>

    <motion.div
     initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    className='fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-2xs'>
  <div className="flex items-center justify-center gap-2 py-2">
    <img
      className='h-10 w-10'
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicvIDK-bTt59nqzUA7MvwnU0P7Lb_cafaZfRTmcmDQnQ40fX-tCQTFlEHy60SgZygMmfDJkDk62RTLEmuTVcP0S0HS_Hgro07C1yzL5U0cnTOQhLlaJtVnI5-lN_teHvTX6hM0ahtbk4wR4ERNE3M4QZ8Y4G5-k-Qr3GfyIprvKqQ3U7f0ms8uaz8N2fE/s500/D-removebg-preview.png"
      alt=""
    />
    <h1 className="text-2xl font-semibold">Dammzoo</h1>
  </div>
</motion.div>

  )
}

export default MainName


//bg-white/30 backdrop-blur-md shadow-lg