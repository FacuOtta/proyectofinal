import React, { useContext } from "react"
import carrito from "../images/carritos.jpg"
import "./CartWidget.css"
import CartContext from './CartContext'
import { NavLink } from "react-router-dom"

const CartWidget = function() {
  const cart = useContext(CartContext)

  return(
    <div>
      <img src={carrito} alt="carrito" className="cart"/>      
      {cart.guitars.length > 0 && 'el carrito tiene ' + cart.getQuantity()}
      <br/>
      <NavLink to="/cart">Ver Carrito</NavLink>
    </div>
  )  
}

export default CartWidget

