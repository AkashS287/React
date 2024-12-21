import { useEffect,useState } from "react";

const useEffectFunction = () => {

    const [count,setCount] = useState(0);

    const handleAdd = () => {
         setCount(count => count + 1);
    }
    
    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])

    return(
        <>
           <button onclick={handleAdd}>add</button>
        </>
    )

}
export default useEffectFunction ;