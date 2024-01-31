const express = require('express')
const app = express()
const port = 8000
const cors = require("cors")
const mongoose = require("mongoose")

//Connect

mongoose
.connect("mongodb://localhost:27017/Todos")
.then(()=>console.log("MongoDB Connected !"))
.catch((e)=>console.log("Error :",e))

//Schema

const UserSchema = new mongoose.Schema({
    Title : String,
    Work : String
})

//Model

const UserModel = mongoose.model("todos",UserSchema)


// Middleware

app.use(cors());
app.use(express.json())

//API Requests

app.get("/",(req,res)=>{
    res.send("Kay Vai Kay Olto ?")
})

app.get("/seetodo",async(req,res)=>{
    await UserModel.find({})
    .then((result)=>{
        res.json(result);
    })
})

app.post("/addtodo",async(req,res)=>{
    await UserModel.create({
        Title:req.body.Title,
        Work:req.body.Work
    })
})

app.patch("/edittodo/:id",async(req,res)=>{
    await UserModel.findByIdAndUpdate(req.params.id,{Title:req.body.Title , Work:req.body.Work})
})

app.delete("/deletetodo/:id",async(req,res)=>{
    await UserModel.findByIdAndDelete(req.params.id)
})

//Listening Server

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})