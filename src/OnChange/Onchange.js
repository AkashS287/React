import { useState } from "react"
import styles from './Onchange.module.css'
const Onchange = () => {

   const [name,setName] = useState('Guest')
   const [quantity,setQuantity] = useState('0')
   const [payment,setPayment] = useState('')
   const [shipping,setShipping] = useState('')

   const handleClick = (e) =>{
        setName(e.target.value)
   }
   const handleQuantity = (e) => {
        setQuantity(e.target.value)
   }

   const handlePayment = (e) => {
    setPayment(e.target.value)
   }

   const handleShipping = (e) => {
    setShipping(e.target.value)
   }

  return (
    <>
      <input type="text" 
              value={name}
             onChange={handleClick}       
      /> 
      <input type="number" 
              value={quantity}
             onChange={handleQuantity}       
      /> 
      <select value={payment} onChange={handlePayment}>
         <option value="Visa">Visa</option>
         <option value="Mastercard">MasterCard</option>
         <option value="DebitCard">DebitCard</option>
      </select>
      <br />
      <br />
      <label>Pick Up
      <input type="radio" 
             value = "PickUp"
             checked={shipping == "PickUp"}
             onChange={handleShipping}
      />
      </label>
      <label>Delivery
      <input type="radio" 
             value = "Delivery"
             checked={shipping == "Delivery"}
             onChange={handleShipping}
      />
      </label>
      <h1 className={styles.txt}>{`Name : ${name}`}</h1>
      <h1 className={styles.txt}>{`Quantity : ${quantity}`}</h1>
      <h1 className={styles.txt}>{`Payment : ${payment}`}</h1>
      <h1 className={styles.txt}>{`Shipping : ${shipping}`}</h1>
    </>
  )
}

export default Onchange
