import React,{useContext} from "react"
import { UseContext } from "./ComponentA"
const ComponentC = () => {
    const user = useContext(UseContext);
   return(
    <h2>Bye {user}</h2>
   )
}
export default ComponentC