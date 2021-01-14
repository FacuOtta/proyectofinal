import React , {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom"

const Guitarras = () => {

  const [guitarras,setGuitarras] = useState([])

  useEffect(()=>{

    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1168")
    .then(res=>res.json())
    .then(res=>{
      setGuitarras(res.results)
    })

  },[])

  return(
    <div>
      <h2>Guitarras</h2>
      {guitarras.length > 0 
      ? guitarras.map((guitarra)=>{
          return (
            <div>
              <h3>{guitarra.title}</h3>
              <NavLink to={"/guitarras" + producto.id}>Ver mas...</NavLink>
            </div>
          )
      })
      : <p>Cargando guitarras...</p>
    }
      Guitarras
    </div>
  )
}

export default Guitarras