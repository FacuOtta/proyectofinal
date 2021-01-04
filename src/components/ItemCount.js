import React, { useState } from "react"

const ItemCount = function ({stock, initial}) {
  const [mensaje, setMensaje] = useState("")
  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    setContador(contador + 1)
    setMensaje("")
  }

  const restarContador = () => {    
    if (contador >= 2){
      setContador(contador - 1)
    }else{
      setMensaje("No se pueden agregar 0 items")
    }
  }

  const agregarAlCarrito = () => {
    if (contador <= stock){
      setMensaje(contador + " Items agregados")
    }else{
      setMensaje("Stock Insuficiente")
    }
  }

  const resetearContador = () => {
    setContador(initial)
    setMensaje("")
    
  }
  return(
    <>
      <p>Items a agregar al carrito : {contador}</p>
        <button onClick={ aumentarContador }>+</button>
        <button onClick={ restarContador }>-</button>
        <button onClick={ resetearContador }>Reset</button>
        <button onClick={agregarAlCarrito}>Agregar al Carrito</button>  
        {mensaje}      
    </>
  )
}

export default ItemCount;