import React, { useEffect, useState } from "react"
import { NavLink,useParams } from "react-router-dom"

const Category = () =>{
  const {id} = useParams()

  const [instruments, setInstruments] = useState([])
  
  const getInstrumentsByCategory = (categoryId) =>{
    const p = new Promise((resolve) =>{
      const instruments = [
        { id: 1, categoryId: 1, name: 'Gibson Les Paul' },
        { id: 2, categoryId: 1, name: 'Gibson Flying V' },
        { id: 3, categoryId: 1, name: 'Gibson SG' },
        { id: 4, categoryId: 2, name: 'Fender Jazz Bass' },
        { id: 5, categoryId: 2, name: 'Fender Precision Bass' },
        { id: 6, categoryId: 2, name: 'Fender Telecaster Bass' }
      ]

      const filteredInstruments = instruments.filter((instrument)=>{
        return instrument.categoryId === parseInt(categoryId)
      })
      console.log(instruments,categoryId)
      resolve(filteredInstruments)     
    })

    return p
  }

  useEffect(() => {
    let montaje = true
    
    getInstrumentsByCategory(id).then((filteredInstruments) => {
      if(montaje){
        setInstruments(filteredInstruments)
      }
    })
    
    return function clean(){
      montaje = false      
    }
  }, []) 
  return(
    <>
      {/* <NavLink to="/category/1">category</NavLink> */}
      <ul>
      {instruments.map((instrument)=>{
        return <li key={instrument.id}><NavLink to={"/instrument/" + instrument.id} >{instrument.name}</NavLink></li>     

      })}
      </ul>
    </>
  )
}

export default Category