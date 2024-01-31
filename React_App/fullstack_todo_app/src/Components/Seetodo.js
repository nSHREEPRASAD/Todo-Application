import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Alltodos from './Alltodos';
import Editbox from './EditBox';

const Seetodo = () => {

  const [TodoList, setTodoList] = useState([]);
  const [EditVal, setEditVal] = useState(false)

  const[Id,setId]=useState("");
  const[Title,setTitle]=useState("");
  const[Work,setWork]=useState("");

  const getTodo = async () => {
    try {
      const response = await axios.get("http://localhost:8000/seetodo");
      setTodoList(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deletetodo/${id}`);
      console.log('DELETE Done!');
      getTodo()
    } catch (e) {
      console.error('Error:', e);
    }
  };

  const EditOpen = (ID,Title,Work) =>{
    if(!EditVal){
      setId(ID)
      setTitle(Title)
      setWork(Work)
      setEditVal(true)
    }
    else{
      setId("")
      setTitle("")
      setWork("")
      setEditVal(false)
    }
  }

  useEffect(() => {
    getTodo();
  }, [TodoList]);

  return (
    <div className="h-screen w-screen flex flex-col">
      {TodoList.length === 0 ? (
        <div className="ml-96 mt-60">
          <div className="w-60 h-28 bg-red-800 rounded-3xl ml-60 flex flex-row justify-center items-center">
            <h1 className="font-bold text-white text-3xl">No Todos !</h1>
          </div>
        </div>
      ) : (
        TodoList.map((todo) => (
          <Alltodos Title={todo.Title} Work={todo.Work} _id={todo._id} handleDelete={handleDelete} EditOpen={EditOpen}></Alltodos>
        ))
      )}
      {
        EditVal?
        <Editbox Id={Id} Title={Title} Work={Work} EditOpen={EditOpen}></Editbox>:
        ""
      }
    </div>
  )
}

export default Seetodo
