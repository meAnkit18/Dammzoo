
import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const chatRef = useRef();
  const navigate = useNavigate();


  

  const api = import.meta.env.VITE_GEMIMI_API

  const messagesRef = useRef([]);

useEffect(() => {
  messagesRef.current = messages;
}, [messages]);




useEffect(() => {
  chatRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);

  
  

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

        setUser(res.data);
        setEmail(res.data.email);  // ✅ Set email only when user is available

      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Session expired. Login again.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };

    fetchUser();
  }, []);


  const { id: characterId } = useParams(); // assuming from route
  const [email, setEmail] = useState(null);
 // replace with your logic

  const [product, setProduct] = useState(null);

  // Fetch character data
  useEffect(() => {
    axios.get(`http://localhost:5000/api/add/${characterId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [characterId]);

useEffect(() => {
  if (!email || !characterId) return;

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/chatroutes/getallchath", {
        params: { email, characterId }
      });
      setMessages(res.data.messages);
      // console.log("Fetched Messages:", res.data.messages);  // ✅ log response directly
    } catch (err) {
      console.error("Error fetching chat history:", err);
    }
  };

  fetchMessages();
}, [email, characterId]);





  // const sendMessage = async () => {
  //   if (!input.trim()) return;

  //   const newMsg = { sender: "user", text: input };

  //   // Save user message to DB
  //   await axios.post("http://localhost:5000/api/add/addmessage", {
  //     email,
  //     characterId,
  //     message: newMsg
  //   });

  //   const formattedMessages = [...messages, newMsg].map((msg) => ({
  //     role: msg.sender === "user" ? "user" : "model",
  //     parts: [{ text: msg.text }],
  //   }));

  //   try {
  //     const response = await axios.post(
  //       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${api}`,
  //       { contents: formattedMessages },
  //       { headers: { "Content-Type": "application/json" } }
  //     );

  //     const botText =
  //       response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
  //       "Sorry 😥 I couldn’t think of a reply.";

  //     const botReply = { sender: `${product.name}`, text: botText };

  //     // Save bot reply to DB
  //     await axios.post("http://localhost:5000/api/add/addmessage", {
  //       email,
  //       characterId,
  //       message: botReply
  //     });

  //     setMessages((prev) => [...prev, newMsg, botReply]);
  //     setInput("");
      
  //   } catch (error) {
  //     console.error("Gemini API error:", error);
  //     const errorReply = {
  //       sender: `${product.name}`,
  //       text: "Oops baby 😓 Something went wrong with my brain (API).",
  //     };
  //     setMessages((prev) => [...prev, newMsg, errorReply]);
  //   }
  // };



  const sendMessage = async () => {
  if (!input.trim()) return;

  const newMsg = { sender: "user", text: input };

  // Save user message to DB
  await axios.post("http://localhost:5000/api/add/addmessage", {
    email,
    characterId,
    message: newMsg
  });

  const formattedMessages = [...messagesRef.current, newMsg].map((msg) => ({
    role: msg.sender === "user" ? "user" : "model",
    parts: [{ text: msg.text }],
  }));

  try {
    console.log("Sending to Gemini:", formattedMessages);

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${api}`,
      { contents: formattedMessages },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Gemini response:", response.data);


    const botText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry 😥 I couldn’t think of a reply.";

    const botReply = { sender: `${product.name}`, text: botText };

    // Save bot reply to DB
    await axios.post("http://localhost:5000/api/add/addmessage", {
      email,
      characterId,
      message: botReply
    });

    setMessages((prev) => {
      const updated = [...prev, newMsg, botReply];
      messagesRef.current = updated; // Sync ref
      return updated;
    });
    setInput("");

  } catch (error) {

    console.error("Gemini API failed with:", error?.response?.data || error.message || error);

    console.error("Gemini API error:", error);
    const errorReply = {
      sender: `${product.name}`,
      text: "Oops baby 😓 Something went wrong with my brain (API).",
    };
    setMessages((prev) => {
      const updated = [...prev, newMsg, errorReply];
      messagesRef.current = updated;
      return updated;
    });
  }
};




  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex justify-center h-screen">
        <div className="flex justify-center flex-1 overflow-y-auto bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins]">
         
        <div className=' w-3xl'>
          <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          className='bg-gradient-to-r from-[#dbf3fd] to-[#fdddf9] flex items-center rounded-b-sm
          '>
            <div className='ml-3'  onClick={()=>navigate('/chat')}>
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
            <div className="relative m-2 ml-8">
                <img className="h-12 w-12 rounded-full"
                    src={product.imgl}
                    alt="userImage" />
                <div className="absolute bottom-2 right-0 h-3.5 w-3.5 rounded-full bg-green-500"></div>
            </div>
            <div className='ml-10 p-1'>
            <h1 className='text-3xl font-semibold text-center '>{product.name}</h1>
            <p className='text-gray-500'>{product.bio}</p>

            </div>
          </motion.div>



          <div className="chat-box overflow-y-auto max-h-[calc(100vh-6rem)] pb-20">

            {messages.slice(1).map((msg, idx) => (
            <div
              key={`${msg.sender}-${msg.text}-${idx}`}
              // className={msg.sender === "user" ? "user-msg" : "bot-msg"}
              className={
                msg.sender === "user"
                  ? "bg-gradient-to-r from-[#dbf3fd] to-[#ffffff] text-black p-2 rounded-lg ml-auto w-fit max-w-xs m-2"
                  : "bg-gradient-to-r from-[#fde7fa] to-[#ffffff] text-black p-2 rounded-lg w-fit max-w-xs ml-2"
              }
            >
              <strong>{msg.sender === "user" ? "You" : `${product.name}`}:</strong> {msg.text}
            </div>
            ))}
            <div ref={chatRef} />

          </div>

        </div>
       <div className="flex fixed bottom-1 items-center h-12 w-full max-w-3xl text-sm text-gray-500 bg-white border border-gray-500/30 rounded">
            <button type="button" className="h-full px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                </svg>
            </button>
            <input className="outline-none bg-transparent h-full w-full" type="text" placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button type="button" className="h-full w-12" onClick={()=> sendMessage()}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.375 22.5v-18l21.375 9zm2.25-3.375L18.956 13.5 5.625 7.875v3.938l6.75 1.687-6.75 1.688zm0 0V7.875z" fill="currentColor" fillOpacity="1"/>
                </svg>
            </button>
        </div>
        </div>
   
    </div>
  );
}

export default ChatWindow;

