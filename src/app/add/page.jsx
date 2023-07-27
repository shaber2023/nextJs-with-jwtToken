"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    const[user,setUser]=useState({name:'',email:'',home:'',taka:''})
    const chang=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const click=async(e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        const myuser = localStorage.getItem('user');
      try {
         await axios.post('http://localhost:5000/api',
                    {name:user.name,email:user.email,home:user.home,taka:user.taka,author:myuser},{
                          headers:{
                              Authorization: `Bearer ${token}`,
                          }
                      })
        } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
      <h3>this is sign up page</h3>
        <p>name</p>
        <input type="text" name='name' value={user.name} onChange={chang} />
        <p>email</p>
        <input type="email" name='email' value={user.email} onChange={chang} />
        <p>home</p>
        <input type="text" name='home' value={user.home} onChange={chang} />
        <p>taka</p>
        <input type="text" name='taka' value={user.taka} onChange={chang} />
        <br />
        <button onClick={click}>add data</button>
    </div>
  )
}

export default page