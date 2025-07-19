import React, { useState } from 'react';
import axios, { Axios } from 'axios';

function Test() {
  const [file,setFile] = useState(null);
  const [uploadedImg,setUploadImg] = useState(null)
  const [load,setLoad] = useState(false)
  const backendURL = import.meta.env.VITE_BACKEND_PORT

  const handelFileChange = (e)=>{
      setFile(e.target.files[0]);
  }

  const handelSubmitimg = async()=>{
    setLoad(true)
    if(!file) return;
    const formData = new FormData();
    formData.append('image',file)

    try {
      const res = await axios.post(`${backendURL}/api/upload/uploadimg`,formData)
      setUploadImg(res.data.imageURL)
      setLoad(false)
      
    } catch (error) {
      console.log(error);
      
    }
  }





  return (
    <>
    <div className="flex  items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-fit">
  <input
    type="file"
    onChange={handelFileChange}
    className="file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-600 file:text-white
               hover:file:bg-blue-700"
  />


  <button
    onClick={handelSubmitimg}
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
  >
    Upload
  </button>
</div>
    {
      load &&(
        <div className='flex h-100 w-100 items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF156D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
        </div>
      )
    }

    {
      uploadedImg && (
        <div>
        <p>Uploaded Image</p>
        <img src={uploadedImg} alt="Image" width="200"/>
        </div>
      )
    }
    </>
  )
}

export default Test
