import React from "react"
import './NavBar.css'
import CartWidget from './CartWidget'


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
      </ul>      
    </>
  )
}

export default NavBar;