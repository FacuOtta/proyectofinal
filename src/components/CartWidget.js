import React from "react"
import carrito from "../images/carritos.jpg"
import "./CartWidget.css"

const CartWidget = function() {
  return(
    <img src={carrito} alt="carrito" className="cart"/>    
  )  
}

export default CartWidget

