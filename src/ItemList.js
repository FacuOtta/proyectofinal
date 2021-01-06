import React from "react"
import Item from "./Item"

const ItemList = function (props) {
  return(
    <>
      {props.guitars}      
      <Item/>
    </>
  )  
}

export default ItemList