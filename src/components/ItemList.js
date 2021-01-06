import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  
  return(
    <div>
      <h3>Item List</h3>
      {props.guitars.map(guitar => (
        <Item key={guitar.id} guitar={guitar} />
      ))}
    </div>
  )
}

export default ItemList