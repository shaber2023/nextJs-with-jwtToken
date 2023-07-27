"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
const page = () => {
    const[edit,setEdit]=useState({name:'',email:'',home:'',taka:''})
  const {id} = useParams();
 const editData=async()=>{
    const data = await axios.get(`http://localhost:5000/api/${id}`)
    setEdit(data.data.singaldata)
 }
 useEffect(()=>{
    editData()
 },[]);
 const chang=(e)=>{
  setEdit({...edit,[e.target.name]:e.target.value})
}
 const editfunc=async(id)=>{
  await axios.patch(`http://localhost:5000/api/${id}`,{name:edit.name,email:edit.email,home:edit.home,taka:edit.taka})
 }

  return (
    <div>
         <p>name</p>
        <input type="text" name='name' value={edit.name} onChange={chang} />
        <p>email</p>
        <input type="email" name='email' value={edit.email} onChange={chang} />
        <p>home</p>
        <input type="text" name='home' value={edit.home} onChange={chang} />
        <p>taka</p>
        <input type="text" name='taka' value={edit.taka} onChange={chang} />
        <br />
        <button onClick={()=>editfunc(edit._id)}>add data</button>
    </div>
  )
}

export default page