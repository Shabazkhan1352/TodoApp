import { FaEdit } from "react-icons/fa";
import { useState,useEffect } from 'react'
import { MdDelete } from "react-icons/md";

import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [todo, setTodo] = useState("")
  const [todos,setTodos]= useState([])
  const [finished, setFinished] = useState(true);
  
  useEffect(()=>{
   let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

  },[])

  const toggleFinish = ()=>{
    setFinished(!finished)
  }


const saveToLS = (params) =>{
  localStorage.setItem("todos",JSON.stringify(todos))
}
     
  const handleAdd = ()=>{
    setTodos([...todos,{todo, "isCompleted" : false}])
    setTodo("")
    saveToLS()

  }
const handlechange = (e)=>{
  setTodo(e.target.value)
}
const handlecheck = (e, index) => {
  const updatedTodos = [...todos];
  updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
  setTodos(updatedTodos);
  saveToLS()

}
const handleDelete = (e,index) => {
  const confirmed = confirm("Are u sure u want to delete this todo?")
  if(confirmed){
    const updatedTodos = [...todos];
    updatedTodos.splice(index,1);
    setTodos(updatedTodos);
    saveToLS()

  }
  
 
  

}

const handleEdit = (e,index)=>{
  
  let t = todos[index]
 
  setTodo(t.todo)
  const updatedTodos = [...todos];
    updatedTodos.splice(index,1);
    setTodos(updatedTodos);
    saveToLS()

  
  
  
  


}
  return  (
    <>
    <Navbar/>
     <div className="container bg-violet-300 rounded-md mx-auto my-5 py-5 px-5 min-h-[80vh] md:w-full  sm:w-1/2">
      <h1 className="text-3xl font-bold text-center"><span className="text-yellow-600">Shu</span>Do Task Manager</h1>
          <div className="flex flex-col gap-3 my-5">
          <h2 className="font-bold">Add a Todo</h2>
           <input onChange={handlechange} value={todo} placeholder='Enter your Todo here..'  className="w-full px-2 py-2 font-serif rounded-md " type="text" name="" id="input" />
           <button  onClick={handleAdd} disabled={todo.length<=2} className="p-2 px-3 py-1 text-white rounded-md bg-violet-800 disabled:bg-violet-400">Save</button>
          </div>
          <input onChange={toggleFinish} type="checkbox" name="" checked={finished} id="" /> Show Finished
          <h2 className="my-3 font-bold">Your Todos</h2>
          <div className="Todos ">
            {todos.length === 0 && <div className="mx-5"> No Todos are set </div>}
            {todos.map((item,index) =>{
              return (finished || !item.isCompleted) && <div key={index} className="flex items-center justify-between w-full gap-3 my-4 Todo lg:w-1/2 md:w-full sm:w-full ">
                <div className="flex gap-5 ">
                <input onChange={(e)=>handlecheck(e,index) } checked={item.isCompleted} type="checkbox"  id="check" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>
  
                <div className="flex gap-3 buttons ">
                  <button onClick={(e)=>{handleEdit(e,index)}} className="p-2 px-3 py-1 text-white rounded-md bg-violet-800"><FaEdit /></button>
                  <button onClick={(e)=>{handleDelete(e,index)} } className="p-2 px-3 py-1 text-white rounded-md bg-violet-800"><MdDelete /></button>
                </div>
                </div>
                

            })}
           
           </div>
          
          
          
           
     </div>
    </>
  )
}

export default App
