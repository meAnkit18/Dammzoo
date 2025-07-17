import React, { useState } from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCopy = () => {
    const textToCopy = 'npx prisma@latest init --db';
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    
    <motion.section 

     initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}

    className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins]">
      {/* <nav className="flex items-center justify-between p-4 border-b border-slate-200 md:px-16 lg:px-24 xl:px-32 w-full">
        <a href="https://prebuiltui.com">
          <img src="/logo.svg" alt="Logo" className="h-10" />
        </a>

        <div className={`max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium`}>
          <a href="#" className="hover:text-gray-500">Home</a>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span>Products</span>
            <div className="absolute bg-gray-100 font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-44 group-hover:opacity-100 transition-all duration-300">
              <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Templates</a>
              <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">UI Components</a>
              <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Mobile Apps</a>
              <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Web Apps</a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-500">Stories</a>
          <a href="#" className="hover:text-gray-500">Pricing</a>
          <button className="md:hidden bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium transition">Sign up</button>
          <button onClick={toggleMenu} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>
            )}
          </button>
        </div>

        <button className="hidden md:block bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium transition">Sign up</button>
      </nav> */}


        

      <div className="flex flex-wrap items-center justify-center p-1.5 mt-50 rounded-full border border-indigo-100 text-xs">
        <div className="flex items-center">
          <img className="size-7 rounded-full border-3 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
          <img className="size-7 rounded-full border-3 border-white -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
          <img className="size-7 rounded-full border-3 border-white -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
        </div>
        <p className="-translate-x-2">Join community of 1m+ founders</p>
      </div>

      <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="text-6xl md:text-6xl text-center font-medium max-w-3xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
        Build. Launch. Scale. Without the complexity.
      </motion.h1>
      <p className="text-slate-600 text-base md:text-base max-md:px-2 text-center max-w-xl mt-3">
        A high-performance, serverless Postgres database that helps you ship fast and scale without limits.
      </p>

      <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 mt-8 rounded-full transition">
        <span>get started for free</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* <div className="bg-gradient-to-t from-indigo-500/40 to-slate-200 p-px rounded-md mt-8">
        <div className="flex items-center gap-4 bg-white rounded-md px-4 py-3">
          $ <span>{'npx prisma@latest init --db'}</span>
          <button onClick={handleCopy}>
            {copySuccess ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.498 5.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V7a1.5 1.5 0 0 0-1.5-1.5" stroke="#000" strokeLinecap="round" strokeLinejoin="round" /> <path d="M2.5 11.5c-.825 0-1.5-.675-1.5-1.5V2.5C1 1.675 1.675 1 2.5 1H10c.825 0 1.5.675 1.5 1.5" stroke="#000" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            )}
          </button>
        </div>
      </div> */}

      {/* <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-16">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#f5f7ff] to-transparent"></div>
        <div className="marquee-inner flex will-change-transform min-w-[200%]">
          <div className="flex py-4" id="logo-container"></div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#efe9f4] to-transparent"></div>
      </div> */}
    </motion.section>
  );
};

export default HeroSection;
