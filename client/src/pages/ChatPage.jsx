import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import ChatCard from '../components/ChatCard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ChatWindow from './ChatWindow';


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
    <div>
      <h1>Chat</h1>

     <div className=''>
      {
        user.map((prop,index)=>(
          <div className='bg-amber-400 m-5 cursor-pointer p-3 text-center w-100 rounded-2xl' onClick={()=>{navigate(`/chat/${user[index]}`)}}>
           
          <ChatCard key={index} prop={user[index]}/>
          


          </div>
        ))
      }
    </div>
    </div>
  )
}

export default ChatPage
