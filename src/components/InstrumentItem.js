import React, { useContext, useEffect, useState } from "react"
import { NavLink,useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import CartContext from './CartContext'

const InstrumentItem = () =>{
  const {id} = useParams()

  const [instrument, setInstrument] = useState([])
  
  const getInstrumentsById = (instrumentId) =>{
    const p = new Promise((resolve) =>{
      const instruments = [
        { id: 1, categoryId: 1, name: 'Gibson Les Paul', img:"https://static.gibson.com/product-images/Custom/CUS118365/Ebony/front-banner-1600_900.png" },
        { id: 2, categoryId: 1, name: 'Gibson Flying V', img:"https://www.organigramaguitars.com/73887-large_default/guitarra-electrica-gibson-flying-v-2018-aged-cherry.jpg" },
        { id: 3, categoryId: 1, name: 'Gibson SG', img:"https://www.cutawayguitarmagazine.com/wp-content/uploads/2014/08/SG14HCRC1-Glam-Shot-590x238.jpg" },
        { id: 4, categoryId: 2, name: 'Fender Jazz Bass', img:"https://www.fmicassets.com/Damroot/ZoomJpg/10006/0194580775_gtr_frt_001_rr.jpg"},
        { id: 5, categoryId: 2, name: 'Fender Precision Bass', img:"https://bairesrocks.vteximg.com.br/arquivos/ids/203416-700-700/641491-MLA27134554951_042018-F.jpg?v=637313064985130000" },
        { id: 6, categoryId: 2, name: 'Fender Telecaster Bass', img:"https://http2.mlstatic.com/bajo-electrico-4-cuerdas-fender-telecaster-bass-modern-china-D_Q_NP_783047-MLA41230435984_032020-F.webp" }
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
      <NavLink to={"/category/"+instrument.categoryId}> Back to Categories</NavLink>
      <h1>{instrument.name}</h1>
      <img src={instrument.img}/>   
      {isCountVisible && <ItemCount initial={0} stock={5} onAddItem={onAdd}/>}   
      {isGuitarInCart && <div>Guitarra ya existente en el Carrito!!!</div>}
      {/* {!isCountVisible && <NavLink to="/cart">Terminar Compra {quantityAdded} Items agregados</NavLink>} */}
      

      <h2>Guitarras en el Carrito</h2>
      {cart.guitars.length === 0 && 'No hay guitarras en el carrito'}

      {cart.guitars.length > 0 && <button onClick={cart.clear}>Vaciar Carrito</button>}

      {cart.guitars.length > 0 && cart.guitars.map(g => {
        return <div key={g.id}>{g.name} ({g.quantity} unidades)</div>
      })}
    </>
  )
}

export default InstrumentItem