import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartContext from './CartContext'


const Cart = () => {
  const cart = useContext(CartContext)

  return(
    <div>
      <h1>Lead Guitars</h1>
      <NavLink to="/">Home</NavLink>
      <hr />
      <h3>Cart</h3>
      
      {
        cart.guitars.length > 0 && 
          <div>
            <ul>
              {cart.guitars.map((guitar) => {
                return <li key={guitar.id}>
                  <button onClick={() => { cart.removeGuitar(guitar.id) }}>eliminar</button> - 
                  <img src={guitar.img} style={{width: '50px'}} />
                  {guitar.name} ({guitar.quantity} unidades) - Precio: ${guitar.price}
                </li>
              })}
            </ul>
            Precio Final: {cart.getTotalPrice()}
            <hr />
            <button onClick={cart.clear}>Vaciar Carrito</button>
          </div>          
      }

      {cart.guitars.length === 0 && 'No hay guitarras en el Carrito'}            
    </div>
  )
}

export default Cart