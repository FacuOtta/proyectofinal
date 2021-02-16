import React, { useContext } from "react"
import CartContext from './CartContext'


const BuyerForm = () =>{
  const cart = useContext(CartContext)
  const handleFieldChange = (e) => {
    if (e.target.name === "name") {  
      cart.addBuyer({ ...cart.getBuyer(), name: e.currentTarget.value})   
    }
    if (e.target.name === "email") {
      cart.addBuyer({ ...cart.getBuyer(), email: e.currentTarget.value})      
    }
    if (e.target.name === "phone") {
      cart.addBuyer({ ...cart.getBuyer(), phone: e.currentTarget.value})       
    }
  }


  return(
    <>
      Contacto
      <br/>
      <input name="name" value={cart.getBuyer().name} onChange={handleFieldChange}/>Full Name
      <br/>
      <input name="email" value={cart.getBuyer().email} onChange={handleFieldChange}/>Email 
      <br/>
      <input name="phone" value={cart.getBuyer().phone} onChange={handleFieldChange}/>Phone Number
      <br/>
    </>
  )
}

export default BuyerForm