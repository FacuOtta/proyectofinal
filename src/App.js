import React, { useState } from "react"
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';

function App(){

  // const [contador, setContador] = useState(0)

  // const aumentarContador = () => {
  //   setContador(contador + 1)
  // }

  // const restarContador = () => {
  //   setContador(contador - 1)
  // }

  // const resetearContador = () => {
  //   setContador(0)
  // }

  return(
    <>
      <header>
        <NavBar/>  
        <ItemListContainer greeting="Hola mundo"/>           
      </header>      
    </>  
  )
}

export default App;
