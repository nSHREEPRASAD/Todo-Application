import React from 'react'
import "./Addtodo.css"
import axios from "axios"
import { useState } from 'react'
import Lottie from 'lottie-react'
import AddTodoAnimation from "../assets/AddTodoAnimation.json"
const Addtodo = (props) => {

  const [Title, setTitle] = useState("");
  const [Work, setWork] = useState("");
  const [RedSignal, setRedSignal] = useState("");
  const [GreenSignal, setGreenSignal] = useState(""); 

  const handleSubmit = async(e) => {
    if (Title === "" || Work === "") {
      setRedSignal("Fill all the Fields !")
      e.preventDefault();
    }
    else {
      setRedSignal("");
      setGreenSignal("Todo Added Successfully!");
      setTimeout(() => setGreenSignal(""), 2000);
      setTitle("");
      setWork("");
      e.preventDefault();
      await axios
        .post("http://localhost:8000/addtodo", { Title: Title, Work: Work })
        .then(() => {
          console.log("POST Done !");
        })
        .catch((e) => console.log("Error :", e))

    }
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-pink-700">
      <div className=" h-40 w-60">
        <Lottie animationData={AddTodoAnimation} loop={true}></Lottie>
      </div>
      <div className=" h-2/3 w-96 bg-white border rounded-3xl centralbox">
          <h1 className='mt-10 ml-10 text-3xl font-bold'> Add Todo !!</h1>
          <form>
            <div className="mb-3 mt-5 ml-10">
              <label for="Title" className="form-label">Title</label>
              <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} type="text" value={Title} className="form-control w-80 border-solid border-2 border-black" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 ml-10">
              <label for="Work" className="form-label">Work</label>
              <input placeholder='Work' onChange={(e) => setWork(e.target.value)} type="text" value={Work} className="form-control w-80 border-solid border-2 border-black" id="exampleInputPassword1" />
            </div>
            <button className="bg-green-600 rounded-2xl w-20 h-8 ml-10 mt-4 text-white" onClick={handleSubmit}>Submit</button>
            {
              RedSignal.length!==0 && GreenSignal.length===0?
              <h1 className="ml-10 mt-10 text-red-900 font-bold text-lg">{RedSignal}</h1>:
              GreenSignal.length!==0 && RedSignal.length===0?
              <h1 className="ml-10 mt-10 text-green-500 font-bold text-lg">{GreenSignal}</h1>:
              ""
            }
          </form>
        </div>
    </div>
  )
}

export default Addtodo
