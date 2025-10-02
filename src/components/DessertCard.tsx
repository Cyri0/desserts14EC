import AddToCartBtn from "./AddToCartBtn"

type DessertType = {
    name: string,
    category: string,
    price: number,
    image?: {
        mobile: string,
        tablet: string,
        desktop: string
    }
}

const DessertCard = (props:DessertType) => {
  return (
    <div>
        <img className="dessert-image" src="" alt="" />
        <AddToCartBtn/>
        <h6 className="dessert-type">{props.category}</h6>
        <h4 className="dessert-name">{props.name}</h4>
        <h5 className="price">${props.price}</h5>
    </div>
  )
}

export default DessertCard