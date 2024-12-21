import { useState } from "react"
import styles from './ArrObj.module.css'

const ArrObj = () => {

    const [details,setdetails] = useState([]);
    const [uname,setUname] = useState("User");
    const [unage,setUage] = useState("");
    const [ugender,setUgender] = useState("");

    const handleName = (e) => {
        setUname(e.target.value);
    }

    const handleAge = (e) => {
        setUage(e.target.value);
    }
    const handleGender = (e) => {
        setUgender(e.target.value);
    }
    const handleClick = () => {
        const det = {
            names : uname,
            ages : unage,
            genders : ugender
        }
        setdetails(details => [...details,det]);

        setUname("");
        setUage("");
        setUgender("");
    }
    const handleRemove = (deleteindex) => {
        setdetails(details.filter((ele,i)=>(ele !== deleteindex)))
    }

  return (
    <>
      <div className={styles.box}>
      <h1>Login</h1>
       <input type="text" 
            //   value={uname}
              onChange={handleName}   
              placeholder="UserName"
       />
       <input type="number" 
              value={unage}
              onChange={handleAge} 
              placeholder="Age"  
       />
       <input type="text" 
              value={ugender}
              onChange={handleGender}
              placeholder="Gender"   
       />
       <ol>
        {details.map((details,i)=>(<li key={i}>
                            Name : {details.names}&nbsp;
                            Age : {details.ages}&nbsp;
                            Gender : {details.genders}&nbsp;
                        <button onClick={() => handleRemove(details)}>Delete</button>
       </li>))}
       </ol>
       <button onClick={handleClick} className={styles.btn}>Add</button>
     </div>  
    </>
  )
}

export default ArrObj
