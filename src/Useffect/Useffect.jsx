import { useEffect, useState } from "react";

const Effect = () => {
   const[count,setCount] = useState(0);
   const [color,setColor] = useState("green");

   useEffect(()=>{
     document.title = `Count is ${count} ${color}`
   },[color,count])
    
   const add = () => {
     setCount(count => (count + 1))
   }
   const sub = () => {
    setCount(count => (count - 1))
  }
  const changeColor = () => {
    setColor(color === "green" ? "blue":"green");
  }
   return(
    <>
      <h1>Hello Everyone</h1>
      <p style={{background:color,
      color:"gold",
      border:"solid black 2px",
      padding:"20px auto"
                 }}>
        Count : {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Substract</button>
      <button onClick={changeColor}>ColorChange</button>
    </>
   )


}
export default Effect