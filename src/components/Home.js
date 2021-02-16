import React from "react"
import { NavLink } from "react-router-dom"
import CartWidget from './CartWidget'
// import BuyerForm from './BuyerForm'

const Home = () =>{
  return(
    <>
      <h1>Lead Guitars</h1>      
      <CartWidget />
      <br/>            
      <h2>Catalog</h2>
      <ul>
        <li><NavLink to='/category/1'> Guitars</NavLink> </li>    
        <li><NavLink to='/category/2'> Basses</NavLink></li>
      </ul>
      
      
    </>
  )
}

export default Home