
import React,{useState} from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  let [todos,setTodos]= useState([
    {todo:"Learn React",Completed:false},
    {todo:"Build a React app",Completed:false},
    {todo:"Deploy the React app",Completed:false}
  ])
  function handleComplete(index){
    setTodos(todos.map((obj,idx)=>{return index==idx ? {...obj,Completed:true} :obj}))
  }
  return (
    <div>
        <h1>Parent Component</h1>
        <ChildComponent todos={todos} handleComplete={handleComplete}></ChildComponent>
    </div>
  )
}

export default App
