import { useState } from "react";
import todo from "./todo.module.css"
const Todo = () => {

    const [task,setTask] = useState(["Complete the task"]);


     const handleAdd = () => {
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = " "
        setTask(task => [...task,newTask])
     }

     const handleRemove = (index) => {
        setTask(task.filter((_,i)=> i!==index))
     }

     const moveTaskUp = (index) => {
          if(index > 0){
             const updateTask = [...task];
            [updateTask[index],updateTask[index-1]]=
            [[updateTask[index-1],updateTask[index]]]
          }
     }

    return(
        <>
       
         <h1>Hello Guys here is my TaskAdder TodoList</h1>

         {task.map((t,index) => (<ol><li key={index}>{t} <button onClick={()=>handleRemove(index)}>Delete</button> <button onClick={moveTaskUp}></button> </li></ol>))}

         <input type="text" 
                placeholder="Place the task You Want !!"
                id="taskInput"
                className={todo.taskInput}
         />
         &nbsp;&nbsp;
        <button onClick={handleAdd}> Add </button>
         </>
    )


}
export default Todo;