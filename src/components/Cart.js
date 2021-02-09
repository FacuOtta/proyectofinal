import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import CartContext from './CartContext'
import { firestore } from "../firebase"

const Cart = () => {
  const cart = useContext(CartContext)
  const [orderNumber, setOrderNumber] = useState(null)
  const setOrden = () => {   
    const db = firestore
    db.collection("orden").add({
      buyer: { name: 'facu', phone: '0112344342', email: 'facu@gmail.com' },
      items: cart.guitars.map(guitar => {
        return { id: guitar.id, price: guitar.price, title: guitar.description }
      }), 
      date: Date(),
      total: cart.getTotalPrice()
    }).then((doc)=> {
      console.log("orden guardada", doc.id)
      setOrderNumber(doc.id)
    })
  }  

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
                  <img src={guitar.imageUrl} style={{width: '50px'}} />
                  {guitar.description} ({guitar.quantity} unidades) - Precio: ${guitar.price}
                </li>
              })}
            </ul>
            Precio Final: {cart.getTotalPrice()}
            <hr />
            <button onClick={cart.clear}>Vaciar Carrito</button>
            <button onClick={setOrden}>Generar Orden</button>
            {orderNumber && <div>Este es su número de orden: {orderNumber}</div>}
          </div>          
      }

      {cart.guitars.length === 0 && 'No hay guitarras en el Carrito'}            
    </div>
  )
}

export default Cart