import React from "react"
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
// import ItemDetailContainer from "./components/ItemDetailContainer"
//import ItemCount from "./components/ItemCount"

// import Guitarras from "./components/Guitarras"
// import Contacto from "./components/Contacto"
// import Nosotros from "./components/Nosotros"


const Main = () => {
  return(
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



        
{/* 
        <Route path="contacto">
          <Contacto/>
        </Route>

        <Route path="nosotros">
          <Nosotros/>
        </Route> */}
      </Switch>  
      {/* <ItemCount/>      */}
      
    </Router>
    
  )
}

export default Main;