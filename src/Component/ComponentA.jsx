import React,{createContext} from "react"
import styles from './index.module.css'
import ComponentB from "./ComponentB"
export const UseContext = createContext();
const ComponentA = () => {
    var user = "Akash"
  return(
    <div className={styles.box}>
        <h3>Hello Iam A</h3>
      <UseContext.Provider value={user}>
        <ComponentB username={user}/>
      </UseContext.Provider>
    </div>
  )
}
export default ComponentA