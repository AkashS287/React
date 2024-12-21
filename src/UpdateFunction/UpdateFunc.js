import { useState } from "react"

const UpdateFunc = () => {
 
   const [car,setCar] = useState({name:"Ford",
                                  model:"Mustang",
                                  year:2024
   })  

   const handleChangeName = (e) => {
       setCar(car => ({...car,name : e.target.value}))
   }
   const handleChangeModel = (e) => {
    setCar(car => ({...car,model : e.target.value}))
}
const handleChangeYear = (e) => {
    setCar(car => ({...car,year : e.target.value}))
}
    
  return (
    <>
       <input type="text"
              value={car.name}
              onChange={handleChangeName} 
       />
       <input type="text" 
              value={car.model}    
              onChange={handleChangeModel}    
       />
       <input type="number" 
              value={car.year}
              onChange={handleChangeYear} 
       />

      <p>Name:{car.name}</p>
      <p>Model:{car.model}</p>
      <p>Year:{car.year}</p>
    </>
  )
}

export default UpdateFunc
