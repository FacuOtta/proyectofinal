import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [guitarras, setGuitarras] = useState([])
  
  const getItems = () =>{
    const i = new Promise((resolve) =>{
      const items = [{id: 1, brand: 'Gibson', description: 'Les Paul', photo: "https://static.gibson.com/product-images/Custom/CUS118365/Ebony/front-banner-1600_900.png"}]
      setTimeout(() => {
        resolve(items)
      }, 2000)
    })
    return i
  }

  useEffect(() => {
    let montaje = true
    getItems().then((items) => {
      if(montaje){
        setGuitarras(items)
      }
    })
    return function clean(){
      montaje = false      
    }
  }, []) 

  return(
    <div>
      <h1>Item Detail Container</h1>
      <ItemDetail guitarras={guitarras} />
    </div>
  )
}

export default ItemDetailContainer