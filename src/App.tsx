import { useEffect, useState } from "react"
import DessertCard from "./components/DessertCard"
import CartContextProvider from "./context/CartContext"
import Cart from "./components/Cart"

export type DessertType = {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
  },
  name: string,
  category: string,
  price: number
}

const App = () => {
  const [desserts, setDesserts] = useState<DessertType[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setDesserts(data))
  },[])

  return (
    <div>
      <h1>Desserts</h1>
      
      <CartContextProvider>
      <Cart />
      <section className="cardWrapper">
      { desserts.map((item) => { 
        return <DessertCard {...item} />}) }
      </section>

      </CartContextProvider>
    </div>
  )
}

export default App