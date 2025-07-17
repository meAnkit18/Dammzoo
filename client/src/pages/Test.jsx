import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Test() {

   const [posts, setPosts] = useState([]);
  const [userd, setUserd] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");  // ✅ search term state

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
      await axios.post(
        "http://localhost:5000/api/add/connect",
        { characterId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const spRes = await axios.get(`http://localhost:5000/api/add/${characterId}`);
      const productData = spRes.data;
      setProduct(productData);

      const userDeti = await axios.get("http://localhost:5000/api/auth/account", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = userDeti.data;
      setUserd(userData);

      const email = userData.email;

      const objChat = {
        sender: "User",
        text: productData.nature
      };

      await axios.post(
        "http://localhost:5000/api/add/chathistory",
        { email, characterId, objChat },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      navigate('/chat');
    } catch (error) {
      console.error("Connection failed:", error);
      alert("Failed to connect: " + (error.response?.data?.error || error.message));
    }
  };
  return (
   <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Characters</h1>

      <input
        type="text"
        placeholder="Search by name or bio..."
        className="border p-2 rounded-lg mb-6 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="bg-red-500 p-2 rounded-2xl mb-6"
        onClick={handleLogout}
      >
        Logout
      </button>

      {posts
        .filter((post) =>
          post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.bio.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((post) => (
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
            <img
              src={post.imgl}
              alt="photo"
              className="rounded-3xl w-100"
            />
            <p>{post.imgl}</p>
            <p>{post.bio}</p>
            <p>{post.nature}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow mt-2"
              onClick={() => handleConnect(post._id)}
            >
              Connect
            </button>
          </div>
        ))}
    </div>
  )
}

export default Test
