import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"
import "../src/index.css"


export default function App() {
  const cardData = data.map(item => {
    return <Cards 
    key={item.title}
    item={item}
    />
  })
  
  return (
    <div>
    <Navbar />
    {cardData}
    </div>
  )
}


