// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function ChatWindow() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//     const {id} = useParams();
//     // console.log(id);
    
//      const [product, setProduct] = useState(null);
  
//     useEffect(() => {
//       axios.get(`http://localhost:5000/api/add/${id}`)
//         .then(res => setProduct(res.data) 
//         )
//         .catch(err => console.error(err));
//     }, [id]);
  
//     if (!product) return <p>Loading...</p>;

// /////////////////////////////IMPORTANT///////////
// //   useEffect(() => {
// //     fetchMessages();
// //   }, []);

//   const fetchMessages = async () => {
//     const res = await axios.get("http://localhost:5000/api/chat/all");
//     setMessages(res.data);
//   };

// const sendMessage = async () => {
//   if (!input.trim()) return;

//   const newMsg = { sender: "user", text: input };

//   // Don't set messages here yet

//   // Save user message to DB
//   await axios.post("http://localhost:5000/api/chat/add", newMsg);


//   const formattedMessages = [...messages, newMsg].map((msg) => ({
//     role: msg.sender === "user" ? "user" : "model",
//     parts: [{ text: msg.text }],
//   }));




//   try {
//     const response = await axios.post(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDvtgBVF4bkgZJrMg7HDHCTHox_jOl-eLA",
//       {
//         contents: formattedMessages,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const botText =
//       response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry 😥 I couldn’t think of a reply.";

//     const botReply = {
//       sender: "shradha",
//       text: botText,
//     };

//     // Save bot reply to DB
//     await axios.post("http://localhost:5000/api/chat/add", botReply);

//     // Now update UI in one go
//     setMessages((prev) => [...prev, newMsg, botReply]);
//     setInput("");
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     const errorReply = {
//       sender: "shradha",
//       text: "Oops baby 😓 Something went wrong with my brain (API).",
//     };
//     setMessages((prev) => [...prev, newMsg, errorReply]);
//   }
// };
// const messagesToDisplay = messages.slice(1);
//   return (
//     <div>
//         <h1 className='text-3xl font-medium text-center bg-amber-400'>{product.name}</h1>
//         <p>{product.bio}</p>
//       <div>
//         <div className="chat-box">
//           {messagesToDisplay.map((msg, idx) => (
//             <div
//               key={idx}
//               className={msg.sender === "user" ? "user-msg" : "bot-msg"}
//             >
//               <strong>{msg.sender === "user" ? "You" : "Shradha"}:</strong>{" "}
//               {msg.text}
//             </div>
//           ))}
//         </div>

//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type something..."
//         />
//       </div>
//     </div>
//   )
// }

// export default ChatWindow



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

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
      const res = await axios.get("http://localhost:5000/api/add/messages", {
        params: { email, id: characterId }
      });
      setMessages(res.data.messages);
    } catch (err) {
      console.error("Error fetching chat history:", err);
    }
  };

  fetchMessages();
}, [email, characterId]);



  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };

    // Save user message to DB
    await axios.post("http://localhost:5000/api/add/addmessage", {
      email,
      characterId,
      message: newMsg
    });

    const formattedMessages = [...messages, newMsg].map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDvtgBVF4bkgZJrMg7HDHCTHox_jOl-eLA",
        { contents: formattedMessages },
        { headers: { "Content-Type": "application/json" } }
      );

      const botText =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry 😥 I couldn’t think of a reply.";

      const botReply = { sender: "shradha", text: botText };

      // Save bot reply to DB
      await axios.post("http://localhost:5000/api/add/addmessage", {
        email,
        characterId,
        message: botReply
      });

      setMessages((prev) => [...prev, newMsg, botReply]);
      setInput("");
    } catch (error) {
      console.error("Gemini API error:", error);
      const errorReply = {
        sender: "shradha",
        text: "Oops baby 😓 Something went wrong with my brain (API).",
      };
      setMessages((prev) => [...prev, newMsg, errorReply]);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1 className='text-3xl font-medium text-center bg-amber-400'>{product.name}</h1>
      <p>{product.bio}</p>
      <div className="chat-box">
        {messages.slice().map((msg, idx) => (
          <div key={idx} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
            <strong>{msg.sender === "user" ? "You" : "Shradha"}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type something..."
      />
    </div>
  );
}

export default ChatWindow;

