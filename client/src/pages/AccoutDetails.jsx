import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function AccoutDetails() {
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
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  )
}

export default AccoutDetails
