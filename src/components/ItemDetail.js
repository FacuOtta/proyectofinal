import React from "react"

const ItemDetail = (props) => {
  return(
    <div>
      <h3>Item Detail</h3>
      {props.guitarras.map(guitarra => {
        return <div key={guitarra.id}>
          <h1>{guitarra.brand} {guitarra.description}</h1>
          <img src={guitarra.photo}/>
        </div>
      })}
    </div>
  )
}

export default ItemDetail