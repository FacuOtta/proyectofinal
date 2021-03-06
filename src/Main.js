import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Category from "./components/Category"
import Home from "./components/Home"
import InstrumentItem from "./components/InstrumentItem"
import Cart from "./components/Cart"
import CartContext from './components/CartContext'
import BuyerForm from "./components/BuyerForm"

// import ItemDetailContainer from "./components/ItemDetailContainer"
//import ItemCount from "./components/ItemCount"

// import Guitarras from "./components/Guitarras"
// import Contacto from "./components/Contacto"
// import Nosotros from "./components/Nosotros"


const Main = () => {
  const [guitars, setGuitars] = useState([])
  const [buyer, setBuyer] = useState ({name:"", email:"", phone:""})
  
  const addGuitar = (guitar, quantity) => {    
    guitar.quantity = quantity
    setGuitars(guitars.concat(guitar))
  }

  const addBuyer = (buyerData) => {
    setBuyer(buyerData)
  }

  const getBuyer = () => {
    return buyer
  }

  const isFormDisabled = () => {
    return buyer.name.length === 0 || buyer.email.length === 0 || buyer.phone.length === 0
  }


  const isInCart = (guitarId) => {
    return guitars.filter(guitar => guitar.id === guitarId).length > 0
  }

  const clear = () => {
    setGuitars([])
    setBuyer({name:"", email:"", phone:""})
  }

  const getQuantity = () => {
    const quantities = guitars.map((guitar) => {
      return guitar.quantity
    })

    let acumulador = 0
    quantities.forEach((quantity) => {
      acumulador = acumulador + quantity
    })
    return acumulador
  }

  const getTotalPrice = () => {
    const pricesPerItem = guitars.map((guitar) => {
      return guitar.quantity * guitar.price
    })
    
    let acumulador = 0

    pricesPerItem.forEach((pricePerItem) => {
      acumulador = acumulador + pricePerItem
    })

    return acumulador
  }

  const removeGuitar = (guitarId) => {
    const guitarsInCart = guitars.filter((guitar) => {      
      return guitar.id !== guitarId
    })
    
    setGuitars(guitarsInCart)
  }

  return(
    <CartContext.Provider value={{
      guitars: guitars,
      addGuitar: addGuitar, 
      clear: clear, 
      isInCart: isInCart, 
      getQuantity: getQuantity,
      getTotalPrice: getTotalPrice,
      removeGuitar: removeGuitar,
      addBuyer: addBuyer,
      getBuyer: getBuyer,
      isFormDisabled: isFormDisabled
    }}>
      <Router>         
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>       

          <Route path="/category/:id">
            <Category/>
          </Route>        

          <Route path="/instrument/:id">
            <InstrumentItem/>
          </Route>

          <Route path="/cart">
            <Cart/>
          </Route>        
        </Switch>  
      </Router>
    </CartContext.Provider>
    
  )
}

export default Main;