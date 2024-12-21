import { useState } from 'react'
import styles from './Color.module.css'
const ColorEmoji = () => {
     
    const [bgColor,setbgColor] = useState('');

    const changeColor = (Color) => {
        setbgColor(Color)
    }
    const handleClick = (e) => {
        e.target.value = bgColor
    }
     
    return(
       <>
        <div className={styles.box}
             style={{background:bgColor}}
             onClick={handleClick}
             
        >
            <h1>{bgColor}</h1>
        </div>
        <br />
       
        <button onClick={()=>changeColor('red')}>Red</button>
        <button onClick={()=>changeColor('green')}>Green</button>
        <button onClick={()=>changeColor('blue')}>Blue</button>
        <button onClick={()=>changeColor('orange')}>Orange</button>
        
       </> 
    )
}
export default ColorEmoji