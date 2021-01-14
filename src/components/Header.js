import React from "react"
import NavBar from "./NavBar"
import { NavLink } from "react-router-dom"

const Header = () => {
  return(
    <>      
      <header>
        <NavLink to="/" exact className="titulo">Guitarras Lider</NavLink>
        <NavBar/>
      </header>  
    </>
  )
}

export default Header