import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

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
    <motion.div 
    // initial={{ opacity: 0, y: -50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    className='flex items-center relative mr-2 '>
       <div className="flex flex-wrap justify-center gap-12">
            <div className="relative">
                <img className="h-15 w-15 rounded-full"
                    src={product.imgl}
                    alt="userImage" />
                <div className="absolute bottom-2 right-0 h-3.5 w-3.5 rounded-full bg-green-500"></div>
            </div>
        </div>
        <div className='ml-8 mt-1 text-base font-semibold'>
          <p>{product.name}</p>
        </div>
        <div className=" ml-auto ">
          <svg  width="30" height="25" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.03 10.228c0 .1-.018.196-.046.286L10.58 5.78l4.45-3.46zm-13.073.963L6.42 6.436l1.69 1.278L9.727 6.43l4.535 4.762c-.071.016-12.234.016-12.305 0m-.769-.963v-7.91l4.45 3.46-4.403 4.736a1 1 0 0 1-.047-.286M14.537 1.33 8.108 6.273 1.682 1.33zm-.495-.988H2.177A1.98 1.98 0 0 0 .199 2.318v7.91c0 1.092.886 1.978 1.978 1.978h11.865a1.98 1.98 0 0 0 1.978-1.978v-7.91A1.98 1.98 0 0 0 14.042.341" fill="#6B7280"/>
          </svg>
        </div>
    </motion.div>
  )
}

export default ChatCard
