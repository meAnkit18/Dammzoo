import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    
    <motion.section 
      id='home'
     initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}

    className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins]">
      <div className="flex flex-wrap items-center justify-center p-1.5 mt-50 rounded-full border border-indigo-100 text-xs">
        <div className="flex items-center">
          <img className="size-7 rounded-full border-3 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
          <img className="size-7 rounded-full border-3 border-white -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
          <img className="size-7 rounded-full border-3 border-white -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
        </div>
        <p className="-translate-x-2">Join our community</p>
      </div>

      <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="text-6xl md:text-6xl text-center font-medium max-w-3xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
        The Vibe, The Feel, The Buzz. Never Existed.
      </motion.h1>
      <p className="text-slate-600 text-base md:text-base max-md:px-2 text-center max-w-xl mt-3">
        They have no past. No body. No history But they laugh, listen, understand. You may forget them, but they won’t forget you.
      </p>

      <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 mt-8 rounded-full transition" onClick={()=> navigate('/login')}>
        <span>get started for free</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </motion.section>
  );
};

export default HeroSection;
