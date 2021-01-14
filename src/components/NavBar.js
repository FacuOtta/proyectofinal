import React from "react"
import './NavBar.css'
import CartWidget from './CartWidget'
// import ItemCount from "./ItemCount"
import { NavLink } from "react-router-dom"


const NavBar = function(){
  return(
    <>               
      <ul>
        <li><NavLink to="/guitarras">Guitarras</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
        <li><NavLink to="/nosotros">Nosotros</NavLink></li>
        <li><CartWidget/></li>
        <ItemCount stock={5} initial={1}/>
      </ul>      
    </>
  )
}

export default NavBar;