import { useState } from "react"
import styles from './ColorPicker.module.css'
const ColorPicker = () => {
    const [color,setColor] = useState('#FFFFFF')
    
    const handleClick = (e) => {
         setColor(e.target.value);
    }

    return(
        <>
         <div className={styles.box}
         style={{backgroundColor:color}}
         >  
             <h1>{color}</h1>
         </div>
         <br />
         <input type="color" 
                value={color}
                onChange={handleClick}
         />
        
        </>
    )
}
export default ColorPicker