"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const initialState={email:'',password:''}
const page = () => {
  const [user,setUser]=useState(initialState)
  const{email,password}=user;
  const chang=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const click=async(e)=>{
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:5000/api/login',{email,password})
      localStorage.setItem('token',data.data.token)
      localStorage.setItem('user',data.data.user.name)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <h2>this is signIn page</h2>
        <p>email</p>
        <input type="text" name='email' value={email} onChange={chang}/>
        <p>password</p>
        <input type="password" name='password' value={password} onChange={chang}/>
        <br />
        <button onClick={click}>Sign In</button>
        <p>Don’t have account? <Link href='/signUp'>Sing Up</Link></p>
    </div>
  )
}

export default page