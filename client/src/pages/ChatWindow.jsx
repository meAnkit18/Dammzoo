
import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);


  

  const api = import.meta.env.VITE_GEMIMI_API

  const messagesRef = useRef([]);

useEffect(() => {
  messagesRef.current = messages;
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

    <div className='w-3xl'>
      <div className='bg-amber-400 flex'>
        <img src={product.imgl} alt="photo"
      className='w-8 rounded-4xl ml-10'
      />
      <h1 className='text-3xl font-medium text-center ml-10 p-1'>{product.name}</h1>
      </div>
      <p>{product.bio}</p>
      <div className="chat-box">

        {messages.slice(1).map((msg, idx) => (
        <div
          key={`${msg.sender}-${msg.text}-${idx}`}
          // className={msg.sender === "user" ? "user-msg" : "bot-msg"}
          className={
            msg.sender === "user"
              ? "bg-blue-200 text-black p-2 rounded-lg ml-auto w-fit max-w-xs m-2"
              : "bg-gray-200 text-black p-2 rounded-lg w-fit max-w-xs ml-2"
          }
        >
          <strong>{msg.sender === "user" ? "You" : `${product.name}`}:</strong> {msg.text}
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
   
    </div>
  );
}

export default ChatWindow;

