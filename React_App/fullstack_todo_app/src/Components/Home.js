import React from 'react'
import Lottie from "lottie-react"
import TodoAnimation from "../assets/TodoAnimation.json"
const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center h-32 items-center font-bold text-black text-5xl">
        <h1>Todo App !!</h1>
      </div>
      <div >
        <Lottie animationData={TodoAnimation} loop={true}></Lottie>
      </div>
    </div>
  )
}

export default Home
