import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import CartContext from './CartContext'
import { firestore } from "../firebase"
import BuyerForm from './BuyerForm'

const Cart = () => {
  const cart = useContext(CartContext)
  const [orderNumber, setOrderNumber] = useState(null)
  
  const setOrden = () => {   
    const db = firestore
    db.collection("orden").add({
      buyer: cart.getBuyer(),
      items: cart.guitars.map(guitar => {
        return { id: guitar.id, price: guitar.price, title: guitar.description }
      }), 
      date: Date(),
      total: cart.getTotalPrice()
    }).then((doc)=> {
      console.log("orden guardada", doc.id)
      cart.clear()
      setOrderNumber(doc.id)
    })
  }  


  return(
    <div>
      <h1>Lead Guitars</h1>
      <NavLink to="/">Home</NavLink>
      <hr />
      <h3>Cart</h3>
      { !orderNumber && 
          <div>
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
                  <BuyerForm />
                  <button onClick={setOrden} disabled={cart.isFormDisabled() || cart.guitars.length === 0}>Realizar Compra</button>
                  <button onClick={cart.clear}>Vaciar Carrito</button>
                </div>
            }         
        

            {cart.guitars.length === 0 && 'No hay guitarras en el Carrito'}
        </div>
      }    

 
      {orderNumber && <h3>Este es su número de orden: {orderNumber}</h3>}
    </div>
  )
}

export default Cart