import React, { useEffect, useState } from "react"
import { NavLink,useParams } from "react-router-dom"
import CartWidget from './CartWidget'

const Category = () =>{
  const {id} = useParams()

  const [instruments, setInstruments] = useState([])
  
  const getInstrumentsByCategory = (categoryId) =>{
    const p = new Promise((resolve) =>{
      const instruments = [
        { id: 1, categoryId: 1, name: 'Gibson Les Paul', price: 1200, img:"https://static.gibson.com/product-images/Custom/CUS118365/Ebony/front-banner-1600_900.png" },
        { id: 2, categoryId: 1, name: 'Gibson Flying V', price: 1000, img:"https://www.organigramaguitars.com/73887-large_default/guitarra-electrica-gibson-flying-v-2018-aged-cherry.jpg" },
        { id: 3, categoryId: 1, name: 'Gibson SG', price: 1300, img:"https://www.cutawayguitarmagazine.com/wp-content/uploads/2014/08/SG14HCRC1-Glam-Shot-590x238.jpg" },
        { id: 4, categoryId: 2, name: 'Fender Jazz Bass', price: 800, img:"https://www.fmicassets.com/Damroot/ZoomJpg/10006/0194580775_gtr_frt_001_rr.jpg"},
        { id: 5, categoryId: 2, name: 'Fender Precision Bass', price: 2200, img:"https://bairesrocks.vteximg.com.br/arquivos/ids/203416-700-700/641491-MLA27134554951_042018-F.jpg?v=637313064985130000" },
        { id: 6, categoryId: 2, name: 'Fender Telecaster Bass', price: 1350, img:"https://http2.mlstatic.com/bajo-electrico-4-cuerdas-fender-telecaster-bass-modern-china-D_Q_NP_783047-MLA41230435984_032020-F.webp" }
      ]

      const filteredInstruments = instruments.filter((instrument)=>{
        return instrument.categoryId === parseInt(categoryId)
      })
      console.log(instruments,categoryId)
      resolve(filteredInstruments)     
    })

    return p
  }

  useEffect(() => {
    let montaje = true
    
    getInstrumentsByCategory(id).then((filteredInstruments) => {
      if(montaje){
        setInstruments(filteredInstruments)
      }
    })
    
    return function clean(){
      montaje = false      
    }
  }, [])
  

  return(
    <div>
      <h1>Lead Guitars</h1>
      <CartWidget />
      <hr />      
      <NavLink to="/"> Back Home</NavLink>
      <ul>
      {instruments.map((instrument)=>{
        return <li key={instrument.id}><NavLink to={"/instrument/" + instrument.id} >{instrument.name}</NavLink></li>     

      })}
      </ul>
    </div>
  )
}

export default Category