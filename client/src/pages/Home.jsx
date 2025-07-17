import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useAppContext } from "../context/AppContext";
import Footer from "../components/Footer";
import MainName from "../components/MainName";
import { motion } from "framer-motion";


function Home() {
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
    <>
    <div 
    className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 text-sm font-[Poppins]"
    >
      <MainName/>
      {/* <div className="flex">
        
      <h1 className="text-2xl my-3 font-semibold text-center">Dammzoo</h1>
      {/* <button
        className="bg-red-500 p-2 rounded-2xl mb-6"
        onClick={handleLogout}
      >
        Logout
      </button> 
      </div> */}


        <div className="mx-1 w-full max-w-2xl mt-15">
          <div className="flex items-center mx-2.5 border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
              <path d="..." />
            </svg>
            <input
              type="text"
              placeholder="Search here"
              className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.div className="mr-2"
             initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2,type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.5 }}
              onClick={()=>navigate('/chat')}
            >
              <svg  width="30" height="25" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.03 10.228c0 .1-.018.196-.046.286L10.58 5.78l4.45-3.46zm-13.073.963L6.42 6.436l1.69 1.278L9.727 6.43l4.535 4.762c-.071.016-12.234.016-12.305 0m-.769-.963v-7.91l4.45 3.46-4.403 4.736a1 1 0 0 1-.047-.286M14.537 1.33 8.108 6.273 1.682 1.33zm-.495-.988H2.177A1.98 1.98 0 0 0 .199 2.318v7.91c0 1.092.886 1.978 1.978 1.978h11.865a1.98 1.98 0 0 0 1.978-1.978v-7.91A1.98 1.98 0 0 0 14.042.341" fill="#6B7280"/>
              </svg>
            </motion.div>

          </div>
                  
        </div>

         <div className="flex flex-wrap justify-center gap-12 mt-7">
            <div className="relative border-[3px] border-blue-500 rounded-lg">
                <img className="h-20 w-20 rounded"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                    alt="userImage1" />
                <div className="absolute -top-3 -right-2 flex items-center justify-center h-5 w-10 bg-blue-500 rounded-full">
                    <p className="text-white text-xs uppercase">New</p>
                </div>
            </div>
            <div className="relative border-[3px] border-red-500 rounded-lg">
                <img className="h-20 w-20 rounded"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                    alt="userImage2" />
                <div className="absolute -top-3 -right-2 flex items-center justify-center h-5 w-10 bg-red-500 rounded-full">
                    <p className="text-white text-xs uppercase">New</p>
                </div>
            </div>
            <div className="relative border-[3px] border-yellow-500 rounded-lg">
                <img className="h-20 w-20 rounded"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="userImage3" />
                <div className="absolute -top-3 -right-2 flex items-center justify-center h-5 w-10 bg-yellow-500 rounded-full">
                    <p className="text-white text-xs uppercase">New</p>
                </div>
            </div>
        </div>


    <div
    className="max-w-4xl">



      {posts
        .filter((post) =>
          post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.bio.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((post) => (
          <Card key={post.id} post={post} onConnect={handleConnect}/>
        ))}
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
