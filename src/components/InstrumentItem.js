import React, { useContext, useEffect, useState } from "react"
import { NavLink,useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import CartContext from './CartContext'
import CartWidget from './CartWidget'
import { firestore } from "../firebase"


const InstrumentItem = () =>{
  const {id} = useParams()

  const [instrument, setInstrument] = useState([])
  
  const getInstrumentsById = () => {
    const db = firestore
    return db.collection("items").doc(id).get()  
  }

  



  
  const cart = useContext(CartContext)
  const [guitarsAdded] = useState(cart.guitars)
  const [isGuitarInCart, setIsGuitarInCart] = useState(false)
  console.log(cart)

  const onAdd = (quantityToAdd) => {
    setQuantityAdded(quantityToAdd)
    
    if (cart.isInCart(instrument.id)){
      setIsGuitarInCart(true)
    } else {
      console.log(instrument)
      cart.addGuitar(instrument, quantityToAdd)
    }
    
  }
  const [quantityAdded, setQuantityAdded] = useState(1)
  const [isCountVisible, setIsCountVisible] = useState(true) 
  
  useEffect(() => {
    let montaje = true
    
    getInstrumentsById().then((doc) => {
      if(montaje){
        console.log(doc.data(), doc)
        setInstrument({...doc.data(), id:doc.id})
      }
    })
    
    return function clean(){
      montaje = false      
    }
  }, []) 

  return(
    <> 
      <h1>Lead Guitars</h1>
      <CartWidget />
      <hr/>
      <NavLink to={"/category/"+instrument.categoryId}> Back to Categories</NavLink>
      <h1>{instrument.title}</h1>
      <img src={instrument.imageUrl} style={{width:'200px'}}/>   
      {isCountVisible && <ItemCount initial={1} stock={5} onAddItem={onAdd}/>}   
      {isGuitarInCart && <div>Guitarra ya existente en el Carrito!!!</div>}                    
    </>
  )
}

export default InstrumentItem