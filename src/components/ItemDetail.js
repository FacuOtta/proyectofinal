import React, { useState } from "react"
import CartContext from "./componets/CartContext"

const ItemDetail = (props) => {
  const [guitars,setGuitars] = useState([])
  const addguitar = (guitar)=> {
    setGuitars(guitar)
  }

 
  return(
    <CartContext.Provider value={{guitars: guitars, addGuitar: addGuitar}}>
      <div>
        <h3>Item Detail</h3>
        {props.guitarras.map(guitarra => {
          return <div key={guitarra.id}>
            <h1>{guitarra.brand} {guitarra.description}</h1>
            <img src={guitarra.photo}/>
          </div>        
        })}        
      </div>
    </CartContext.Provider>
  )
}

export default ItemDetail