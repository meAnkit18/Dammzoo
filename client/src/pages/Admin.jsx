import React from 'react'
import { useState } from 'react'
import axios from 'axios'



function Admin() {
    const [form,setForm] = useState({name:"",imgl:"",bio:"",nature:""});


    const handleChage = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/add/admin',form)
            alert("Added Sucessfully")
            
        } catch (error) {
            console.log(error);
            
        }

    }

  return (
    <div>
        <h1>Admin add Character</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name='name'
        required
        onChange={handleChage}
        placeholder='Enter name'
        /> <br />
        <input type="text"
        name='imgl'
        onChange={handleChage}
        required
        placeholder='Enter imgl'
        /> <br />
        <input type="text"
        name='bio'
        onChange={handleChage}
        required
        placeholder='Enter bio'
        /> <br />
        <input type="text"
        name='nature'
        onChange={handleChage}
        required
        placeholder='Enter nature'
        /> <br /><br />
        <button className='inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong' type='submit'>Add Character</button>
      </form>
    </div>
  )
}

export default Admin
