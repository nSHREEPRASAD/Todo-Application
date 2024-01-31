import React, { useState } from 'react'
import "./EditBox.css"
import axios from 'axios'
const Editbox = (props) => {
  
  const [Title,setTitle]=useState(props.Title)
  const[Work,setWork]=useState(props.Work)


  const EditButton = (id,callback) =>{
    axios.patch(`http://localhost:8000/edittodo/${id}`,{Title:Title,Work:Work})
    callback()
  }
  return (
    <div className="center flex flex-col items-center">
      <div className=" w-4/5 flex flex-row-reverse">
        <button className="w-9 h-9 rounded-lg	 bg-red-600 mt-2" onClick={props.EditOpen}>X</button>
      </div>
      <h1 className=" text-black text-4xl font-bold">Edit Todo !</h1>
      <div className="flex flex-col items-start w-3/4 h-1/2 mt-4  ">
        <form>
          <label for="Title" className="form-label font-bold text-xl">Title:-</label>
          <input onChange={(e)=>setTitle(e.target.value)} placeholder='Title'  type="text" className="form-control w-60 border-solid border-2 border-black" id="exampleInputEmail1" aria-describedby="emailHelp" />

          <label for="Work" className="form-label font-bold text-xl mt-3">Work:-</label>
          <input onChange={(e)=>setWork(e.target.value)} placeholder='Work'  className="form-control w-60 border-solid border-2 border-black" id="exampleInputPassword1" />
        </form>
        <button className="w-20 h-9 rounded-lg bg-amber-500 mt-4" onClick={()=>EditButton(props.Id,props.EditOpen)}>✍️Edit</button>
      </div>
    </div>
  )
}

export default Editbox
