
import { useContext } from "react"
import type { DessertType } from "../App"
import AddToCartBtn from "./AddToCartBtn"
import { CartContext } from "../context/CartContext"

const DessertCard = (props:DessertType) => {
  const {cart, changeCart} = useContext(CartContext)
  return (
    <div>
        <img className="dessert-image" src={props.image.mobile}/>
        {/* <AddToCartBtn/> */}
        <button
        onClick={()=>changeCart([...cart, props])}
        >Kosárba!</button>
        <h6 className="dessert-type">{props.category}</h6>
        <h4 className="dessert-name">{props.name}</h4>
        <h5 className="price">${props.price}</h5>
    </div>
  )
}

export default DessertCard