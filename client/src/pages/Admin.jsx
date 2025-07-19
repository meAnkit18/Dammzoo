import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import MainName from '../components/MainName';



function Admin() {
    const [form,setForm] = useState({name:"",imgl:"",bio:"",nature:""});
      const backendURL = import.meta.env.VITE_BACKEND_PORT
 const [file,setFile] = useState(null);
  const [uploadedImg,setUploadImg] = useState(null)
  const [load,setLoad] = useState(false)

    const handleChage = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${backendURL}/api/add/admin`,form)
            alert("Added Sucessfully")
            
        } catch (error) {
            console.log(error);
            
        }

    }

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
      setForm((prev) => ({ ...prev, imgl: res.data.imageURL }));
      setLoad(false)
      
    } catch (error) {
      console.log(error);
      
    }
  }



  return (
  //   <div className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 text-sm font-[Poppins]"
  //   >   

  //   <MainName/>
  //   <div className='mt-20 items-center w-3xl'>

  //       <h1 className="text-2xl font-semibold mb-4 text-center">Add Character</h1>
  //       {uploadedImg && (
  //         <div className=''>
  //       <p className='font-semibold'>Uploaded Image</p>
  //       <img
  //       className='rounded-full'
  //       src={uploadedImg} alt="Image" width="70"/>
  //       </div>
  //       )
  //       }

  //       {
  //         load && (
  //           <div className='flex h-10 w-10 items-center justify-center'>
  //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF156D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
  //       </div>
  //         )
  //       }
  //     <form onSubmit={handleSubmit}>
  //       <div className='flex'>

  //         <input
  //           type="file"
  //           onChange={handelFileChange}
  //           className="file:mr-4 file:py-2 file:px-4
  //                     file:rounded-full file:border-0
  //                     file:text-sm file:font-semibold
  //                     file:bg-blue-600 file:text-white
  //                     hover:file:bg-blue-700"
  //         />


  //             <div
  //               onClick={handelSubmitimg}
  //               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
  //             >
  //               Upload
  //             </div>
  //       </div>
        
  // <br />
  //       <input type="text"
  //       name='name'
  //       required
  //       onChange={handleChage}
  //       placeholder='Enter name'
  //       className="w-3xl border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
  //       /> <br />
        
  //       <input type="text"
  //       name='bio'
  //       onChange={handleChage}
  //       required
  //       placeholder='Enter sort bio'
  //       className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
  //       /> <br />
  //       {/* <input type="text"
  //       className="w-full  border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
  //       name='nature'
  //       onChange={handleChage}
  //       required
  //       placeholder='Enter nature'
  //       />  */}
  //       <textarea
  //         name="nature"
  //         onChange={handleChage}
  //         required
  //         placeholder="Go ahead, type in some data to train it!"
  //         className="w-full h-48 max-h-96 border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 resize-y overflow-y-auto"
  //       />

  //       <br />
  //       <button className='inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong' type='submit'>Add Character</button>
  //     </form>
  //   </div>
  //   </div>


  <div
  className="flex flex-col items-center min-h-screen px-4 py-8 sm:px-6 md:px-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 text-sm font-[Poppins]"
>
  <MainName />

  <div className="mt-10 w-full max-w-2xl  bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-md">
    <h1 className="text-2xl font-semibold mb-6 text-center">Add Character</h1>

    {uploadedImg && (
      <div className="mb-4 text-center">
        <p className="font-semibold mb-2">Uploaded Image</p>
        <img
          className="rounded-full mx-auto"
          src={uploadedImg}
          alt="Image"
          width="70"
        />
      </div>
    )}

    {load && (
      <div className="flex h-10 w-10 mx-auto items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 150"
        >
          <path
            fill="none"
            stroke="#FF156D"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <input
          type="file"
          onChange={handelFileChange}
          className="file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700"
        />

        <div
          onClick={handelSubmitimg}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg cursor-pointer text-center"
        >
          Upload
        </div>
      </div>

      <input
        type="text"
        name="name"
        required
        onChange={handleChage}
        placeholder="Enter name"
        className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
      />

      <input
        type="text"
        name="bio"
        onChange={handleChage}
        required
        placeholder="Enter short bio"
        className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
      />

      <textarea
        name="nature"
        onChange={handleChage}
        required
        placeholder="Go ahead, type in some data to train it!"
        className="w-full h-48 max-h-96 border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 resize-y overflow-y-auto"
      />

      <button
        type="submit"
        className="w-full sm:w-auto inline-block rounded-full bg-neutral-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-700 focus:outline-none active:bg-neutral-900"
      >
        Add Character
      </button>
    </form>
  </div>
</div>

  )
}

export default Admin
