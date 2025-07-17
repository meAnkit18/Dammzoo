import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import ChatCard from '../components/ChatCard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ChatWindow from './ChatWindow';
import { motion } from 'framer-motion';
import MainName from '../components/MainName';



function ChatPage() {

   const [user, setUser] = useState([]);
   const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        window.location.href = "/login";
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/auth/account", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data.characterId);
      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Session expired. Login again.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading user info...</p>;
  return (
    <>
    <MainName/>
    <div 
    className="flex mt-15 flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 text-sm font-[Poppins]"
    >
      <div className='flex items-center'>
        <div  onClick={()=>navigate('/home')}>
          <svg
              className="w-6 h-6 text-gray-700 cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>

      <h1 className='text-center text-1xl font-medium my-1.5'>Message</h1>
      </div>

     <div className='w-full px-2 max-w-2xl '>
      {
        user.reverse().map((prop,index)=>(
          <motion.div
          
          initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2,type: "spring", stiffness: 300 }}

       whileHover={{ scale: 1.01 }}
          className=' bg-gradient-to-r from-[#ebf9ff] to-[#ffeefd] ml-auto m-0.5 cursor-pointer p-2 text-center w-full rounded-2xl ' onClick={()=>{navigate(`/chat/${user[index]}`)}}>
           
          <ChatCard key={index} prop={user[index]}/>
          </motion.div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default ChatPage
