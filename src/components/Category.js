import React, { useEffect, useState } from "react"
import { NavLink,useParams } from "react-router-dom"
import CartWidget from './CartWidget'
import { firestore } from "../firebase"

const Category = () =>{
  const {id} = useParams()

  const [instruments, setInstruments] = useState([])
  
  const getInstrumentsByCategory = (categoryId) =>{
    
    const db = firestore 
    return db.collection("items").where("categoryId", "==", parseInt(id)).get()
  }

  useEffect(() => {
    let montaje = true

    getInstrumentsByCategory(id).then((itemsCollection) => {      
      if(montaje){
        setInstruments(itemsCollection.docs)        
      }
    })
    
    return function clean(){
      montaje = false      
    }
  }, [])
  

  return(
    <div>
      <h1>Lead Guitars</h1>
      <CartWidget />
      <hr />      
      <NavLink to="/"> Back Home</NavLink>
      <ul>        
      {instruments.map((instrument)=>{
        return <li key={instrument.id}><NavLink to={"/instrument/" + instrument.id} >{instrument.data().title}</NavLink></li>
      })}
      </ul>
    </div>
  )
}

export default Category