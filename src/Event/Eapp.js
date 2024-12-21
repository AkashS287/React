const Event = () => {
    const handleclick = (e) => {
        console.log(e)
    }
    const handleBlur = (e) => {
        console.log(e.target.value)
    }
    
    return(
       <>
         <button onClick={(e) => handleclick(e)}>Click</button>
         <input id='txt' type="text" onBlur={handleBlur} />
       </>   
    )
}
export default Event