"use client"
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from './page.module.css'

const page = () => {
const[mydata,setData]=useState()

  const fulldata =async()=>{
    const data = await axios.get('http://localhost:5000/api')
    setData(data.data.fulldata)
  }
useEffect(()=>{
  fulldata()
},[])

const userDelete=async(id)=>{
  const token = localStorage.getItem('token');
try {
  await axios.delete(`http://localhost:5000/api/${id}`,{
    headers:{
      Authorization: `Bearer ${token}`,
    }
  }),
  fulldata(); 
} catch (error) {
  console.log(error)
}
}

  return (
    <div>
      <h2>this is home page</h2>
      <section className={style.card}>
      {mydata?.map((data)=>(
        <article key={data._id} className={style.item}>
          <h2>Name:{data.name}</h2>
          <p>Email:{data.email}</p>
          <p>Home:{data.home}</p>
          <b>author : {data.author}</b>
          <br />
          <Link href={`/edit/${data._id}`}>Edit Student</Link>
          <button onClick={()=>userDelete(data._id)}>Delete</button>
        </article>
      ))}
      </section>
      </div>
  )
}

export default page