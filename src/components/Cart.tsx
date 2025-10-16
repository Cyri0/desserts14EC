import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const {cart} = useContext(CartContext)
    return <div>
        {cart.map(dessert => <div>{dessert.name}</div>)}
    </div>
}

export default Cart