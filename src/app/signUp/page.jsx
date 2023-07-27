"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const initialState={name:'',email:'',phone:'',password:''}
const page = () => {
  const [user,setUser]=useState(initialState)
  const{name,email,phone,password}=user;
  const chang=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
const click=async(e)=>{
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/registration',{name,email,phone,password})
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
        <h2>this is registration page</h2>
        <p>name</p>
        <input type="text" name='name' value={name} onChange={chang}/>
        <p>email</p>
        <input type="text" name='email' value={email} onChange={chang}/>
        <p>phone</p>
        <input type="number" name='phone' value={phone} onChange={chang}/>
        <p>password</p>
        <input type="password" name='password' value={password} onChange={chang}/>
        <br />
        <button onClick={click}>Sign Up</button>
        <p>Already have account? <Link href='/signIn'>Sing In</Link></p>
    </div>
  )
}

export default page