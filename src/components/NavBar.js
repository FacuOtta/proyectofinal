import React from "react"
import './NavBar.css'
import CartWidget from './CartWidget'
import ItemCount from "./ItemCount"


const NavBar = function(){
  return(
    <>     
      <header>
        <h1 className="titulo">Guitarras Lider</h1>
        </header>      
      <ul>
        <li>Home</li>
        <li>Contacto</li>
        <li>Nosotros</li>
        <li><CartWidget/></li>
        <ItemCount stock={5} initial={1}/>
      </ul>      
    </>
  )
}

export default NavBar;