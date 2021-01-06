import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"

const ItemListContainer = function (props){
  const [guitars, setGuitars] = useState([])
// useEffect(() => {
//   let isMounted = true;
//   const promise = new Promise((resolve, reject) => {
//     const violas = [{ id: 1, title: 'Gibson Les Paul', description: 'alta viola', price: 2000, pictureUrl: 'http://google.com'}]
//     resolve(violas)
//   });
//   promise.then((data) => {
//     if(isMounted){
//       setGuitars(data)
//     }
//   })
//   return () => { isMounted = false };
// },[guitars])
  // const getGuitars = () => {
  //   const p = new Promise ((resolve, reject) => {
  //     resolve([{id: 1, title: "Gibson Les Paul", description: "La de Slash", price: 2000, pictureUrl: "https://postercity.com.ar/wp-content/uploads/2019/03/Slash-Gibson-Standard-1959-replica-low.jpg" }])
  //    })
  //   return p
  // }
  // // const [guitars, setGuitars] = useState([])
  // const guitarPromise = getGuitars()
  //   guitarPromise.then((data) => {
  //     this.setState("fruta")
  //   })
  return(
    <div>
      {/* {guitars} */}
      <ItemList guitars={[{id: 1}]}/>
    </div>
  )
}

export default ItemListContainer