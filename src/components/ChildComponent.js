
import React from "react";

const ChildComponent=({todos,handleComplete})=>{
  return (
    <div>

      <h2>Child Component</h2>
      <ul>
        {todos.map((obj,index)=>{
          return <li key={index}> {obj.todo}{obj.Completed ? null:<button onClick={()=>{handleComplete(index)}}>Completed</button>}</li>;
          })}
      </ul>
    </div>

  )
}
export default ChildComponent;