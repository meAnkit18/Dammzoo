import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function ChatCard({prop}) {
  const id = prop;
   const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/add/${id}`)
      .then(res => setProduct(res.data) 
      )
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <p>{product.name}</p>
    </div>
  )
}

export default ChatCard
