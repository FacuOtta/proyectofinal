import React from "react"
import { NavLink } from "react-router-dom"
import carrito from "../images/carritos.jpg"
import "./CartWidget.css"
import ItemCount from "./ItemCount"

const Home = () =>{
  return(
    <>
      <h1>Lead Guitars</h1>
      <strong>Home</strong>
      <br></br>      
      <p>Cart</p>
      <img src={carrito} alt="carrito" className="cart"/>
      <br></br>      
      <ItemCount stock={5} initial={1}/>
      {/* <ItemCount stock={5} initial={1}/> */}
      <h2>Catalog</h2>
      <ul>
        <li><NavLink to='/category/1'> Guitars</NavLink> </li>    
        <li><NavLink to='/category/2'> Basses</NavLink></li>
      </ul>
      
    </>
  )
}

export default Home