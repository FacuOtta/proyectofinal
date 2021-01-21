import React from "react"
import './App.css';
// import NavBar from './components/NavBar';
import Header from "./components/Header"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter} from "react-router-dom"  
import CartContext from "./components/CartContext"
// import ItemCount from './components/ItemCount';

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
    <BrowserRouter>
        <Header/>      
        {/* <NavBar/>   */}
        { /* <ItemListContainer/>  */  }
        <ItemDetailContainer/>                   
    </BrowserRouter>  
  )
}

export default App
