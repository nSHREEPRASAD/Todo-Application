import React from 'react'
const Alltodos = (props) => {
    return (
        <div className="mb-2 h-28 w-screen bg-black text-white ml-2">
            <h1 className="mt-2 ml-4 font-bold"># Title : {props.Title}</h1>
            <h1 className="mt-2 ml-4 font-bold"># Work : {props.Work}</h1>

            <div className="flex flex-row mt-2 ml-4">
                <div className="w-20 h-8 bg-red-600 flex flex-row justify-center rounded-3xl mr-4"><button onClick={() => props.handleDelete(props._id)}>✂️Delete</button></div>
                <div className="w-20 h-8 bg-amber-500 flex flex-row justify-center rounded-3xl mr-4 text-black"><button onClick={()=>props.EditOpen(props._id,props.Title,props.Work)}>✍️Edit</button></div>
            </div>
        </div>
    )
}

export default Alltodos