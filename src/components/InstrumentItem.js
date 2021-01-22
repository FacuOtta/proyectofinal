import React, { useContext, useEffect, useState } from "react"
import { NavLink,useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import CartContext from './CartContext'
import CartWidget from './CartWidget'

const InstrumentItem = () =>{
  const {id} = useParams()

  const [instrument, setInstrument] = useState([])
  
  const getInstrumentsById = (instrumentId) =>{
    const p = new Promise((resolve) =>{
      const instruments = [
        { id: 1, categoryId: 1, name: 'Gibson Les Paul', price: 1200, img:"https://static.gibson.com/product-images/Custom/CUS118365/Ebony/front-banner-1600_900.png" },
        { id: 2, categoryId: 1, name: 'Gibson Flying V', price: 1000, img:"https://www.organigramaguitars.com/73887-large_default/guitarra-electrica-gibson-flying-v-2018-aged-cherry.jpg" },
        { id: 3, categoryId: 1, name: 'Gibson SG', price: 1300, img:"https://www.cutawayguitarmagazine.com/wp-content/uploads/2014/08/SG14HCRC1-Glam-Shot-590x238.jpg" },
        { id: 4, categoryId: 2, name: 'Fender Jazz Bass', price: 800, img:"https://www.fmicassets.com/Damroot/ZoomJpg/10006/0194580775_gtr_frt_001_rr.jpg"},
        { id: 5, categoryId: 2, name: 'Fender Precision Bass', price: 2200, img:"https://bairesrocks.vteximg.com.br/arquivos/ids/203416-700-700/641491-MLA27134554951_042018-F.jpg?v=637313064985130000" },
        { id: 6, categoryId: 2, name: 'Fender Telecaster Bass', price: 1350, img:"https://http2.mlstatic.com/bajo-electrico-4-cuerdas-fender-telecaster-bass-modern-china-D_Q_NP_783047-MLA41230435984_032020-F.webp" }
      ]

      const filteredInstruments = instruments.filter((instrument)=>{        
        return instrument.id === parseInt(instrumentId)
      })      
      resolve(filteredInstruments[0])     
    })

    return p
  }

  
  const cart = useContext(CartContext)
  const [guitarsAdded] = useState(cart.guitars)
  const [isGuitarInCart, setIsGuitarInCart] = useState(false)
  console.log(cart)

  const onAdd = (quantityToAdd) => {
    // setIsCountVisible(false)
    setQuantityAdded(quantityToAdd)
    
    if (cart.isInCart(instrument.id)){
      setIsGuitarInCart(true)
    } else {
      cart.addGuitar(instrument, quantityToAdd)
    }
    
  }
  const [quantityAdded, setQuantityAdded] = useState(1)
  const [isCountVisible, setIsCountVisible] = useState(true) 
  
  useEffect(() => {
    let montaje = true
    
    getInstrumentsById(id).then((filteredInstruments) => {
      if(montaje){
        setInstrument(filteredInstruments)
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
      <h1>{instrument.name}</h1>
      <img src={instrument.img} style={{width:'200px'}}/>   
      {isCountVisible && <ItemCount initial={1} stock={5} onAddItem={onAdd}/>}   
      {isGuitarInCart && <div>Guitarra ya existente en el Carrito!!!</div>}               
    </>
  )
}

export default InstrumentItem