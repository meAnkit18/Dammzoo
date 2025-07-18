import React from 'react'
import NavBar from '../components/NavBar'

function PageNotFound() {
  return (
    <div 
    // className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20"
    className="flex flex-col items-center justify-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins]"
    
    >
        {/* <NavBar/> */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text">
                404 Not Found
            </h1>
            <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
            <p className="md:text-xl text-gray-400 max-w-lg text-center">
                The page you are looking for does not exist or has been moved.
            </p>
            <a href="/" className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
                Back to Home
                <svg className="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
        </div>
  )
}

export default PageNotFound
