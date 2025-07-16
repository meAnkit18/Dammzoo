import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home() {
  const [posts, setPosts] = useState([]);
  const [userd, setUserd] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    

    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/add/fetchchar", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading) return <p>Loading...</p>;

  if (!isAuthenticated) return <p>You are not logged in.</p>;



const handleConnect = async (characterId) => {
  const token = localStorage.getItem("token");

  try {
    // 1. Post to connect
    await axios.post(
      "http://localhost:5000/api/add/connect",
      { characterId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // 2. Get character details directly (don't rely on setState immediately)
    const spRes = await axios.get(`http://localhost:5000/api/add/${characterId}`);
    const productData = spRes.data;
    setProduct(productData); // okay to update state, but don't depend on it here

    // 3. Get user info
    const userDeti = await axios.get("http://localhost:5000/api/auth/account", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const userData = userDeti.data;
    setUserd(userData);

    const email = userData.email;

    // const objChat = {
    //   sender: "modle",
    //   text: productData.nature  
    // };
    const objChat = {
      sender: "User",
      text: productData.nature  // ✅ This now works
    };

    // 4. Post chat history
    await axios.post(
      "http://localhost:5000/api/add/chathistory",
      { email, characterId, objChat },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    
    alert("Connected successfully!");
    navigate('/chat');
  } catch (error) {
    console.error("Connection failed:", error);
  alert("Failed to connect: " + (error.response?.data?.error || error.message));
    console.error("Connection failed:", error.response?.data || error.message);
    alert("Failed to connect.");
  }
};



  return (
    <div>
      <h1>All Characters</h1>
      <button
      className="bg-red-500 p-2 rounded-2xl"
      onClick={handleLogout} style={{ margin: "10px" }}>
        Logout
      </button>
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-amber-400"
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.name}</h3>
          <img src={post.imgl} alt="photo" 
          className="rounded-3xl w-100"
          />
          <p>{post.imgl}</p>
          <p>{post.bio}</p>
          <p>{post.nature}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow mt-2" onClick={() => handleConnect(post._id)}>Connect</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
