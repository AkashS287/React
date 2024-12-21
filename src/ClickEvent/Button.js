const Button = () => {
    let count = 0;
    const handleclick = (name) => {
        if(count < 3){
            count++
            console.log(`${name} clicked ${count} times`)
        }
        else{
            console.log('Stop clicking me')
        }
    }
  return(
     <button onClick={() => handleclick("Akash")}>Click me</button>
  );
}
export default Button