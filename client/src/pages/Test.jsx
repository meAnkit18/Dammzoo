import React, { useState } from 'react';
import axios, { Axios } from 'axios';

function Test() {
  const [file,setFile] = useState(null);
  const [uploadedImg,setUploadImg] = useState(null)
  const backendURL = import.meta.env.VITE_BACKEND_PORT

  const handelFileChange = (e)=>{
      setFile(e.target.files[0]);
  }

  const handelSubmit = async()=>{
    if(!file) return;
    const formData = new FormData();
    formData.append('image',file)

    try {
      const res = await axios.post(`${backendURL}/api/upload/uploadimg`,formData)
      setUploadImg(res.data.imageURL)
      
    } catch (error) {
      console.log(error);
      
    }
  }





  return (
    <>
    <div>
      <input type="file" onChange={handelFileChange} />
      <button onClick={handelSubmit}>Upload</button>
    </div>
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
