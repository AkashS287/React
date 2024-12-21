import { useState } from "react";
 
 export function Count(){
     
    const [increment,setIncrement] = useState(0)

    function PrevIncrement(){
        setIncrement(increment + 1)
    }
    function PrevDecrement(){
        setIncrement(increment - 1)
    }

    return(
        <div>
            <h3>Count</h3>
            <button onClick={PrevIncrement}>+</button>
            <h2>
            <button>{`Count: ${increment}`}</button>
            </h2>
            <button onClick={PrevDecrement}>-</button>
        </div>
    )
}

