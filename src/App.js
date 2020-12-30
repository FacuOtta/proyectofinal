import React from "react"
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App(){
  return(
    <header>
      <NavBar/>  
      <ItemListContainer greeting="Hola mundo"/>    
    </header>
  )
}

export default App;
