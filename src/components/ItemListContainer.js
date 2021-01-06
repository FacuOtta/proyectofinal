import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [guitars, setGuitars] = useState([])

  const getGuitars = () => {
    const p = new Promise((resolve) => {
      const data = [{id: 1, name: 'gibson les paul'}, {id: 2, name: 'fender tele'}]
      setTimeout(() => {
        resolve(data)
      }, 3000)
    })
    return p
  }

  useEffect(() => {
    let mounted = true
    getGuitars().then((data) => {
      if(mounted){
        setGuitars(data)
      }
    })
    return function clean(){
      mounted = false
    }
  }, [])
  
  return(
    <div>
      <h1>Item List Container</h1>
      <ItemList guitars={guitars} />
    </div>
  )
}

export default ItemListContainer
