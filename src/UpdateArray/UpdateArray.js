import { useState } from "react";
import makeup from './Update.module.css';
const UpdateArray = () => {
    const [fruit,setFruit] = useState(['Banana','JackFruit','Orange','Apple']);
    
    const handleAdd = () => {
        const newFruit = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFruit(fruit => [...fruit, newFruit])
    }
    const handleRemove = (index) => {
         setFruit(fruit.filter((ele,i) => ele !== index))  
    }
     
  return (
    <div className={makeup.container}> 
      {fruit.map((fruit,index)=>(<li key={index}>{fruit}<button className={makeup.btn} onClick={() => handleRemove(fruit)}>delete</button></li>))}<br/>
      <input type="text" 
             id="foodInput"
             placeholder="Enter the food name"   
      />
      <button className={makeup.btn_add} onClick={handleAdd}>Add</button>
    </div>
  )
}

export default UpdateArray
