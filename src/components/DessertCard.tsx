
import type { DessertType } from "../App"
import AddToCartBtn from "./AddToCartBtn"

const DessertCard = (props:DessertType) => {
  return (
    <div>
        <img className="dessert-image" src={props.image.mobile}/>
        <AddToCartBtn/>
        <h6 className="dessert-type">{props.category}</h6>
        <h4 className="dessert-name">{props.name}</h4>
        <h5 className="price">${props.price}</h5>
    </div>
  )
}

export default DessertCard