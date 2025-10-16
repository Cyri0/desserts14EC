import { createContext, useState, type ReactNode } from "react"
import type { DessertType } from "../App"

export const CartContext = createContext<{
    cart: DessertType[],
    changeCart: (newCart: DessertType[])=>void
}>({
    cart: [],
    changeCart: ()=>{}
})

const CartContextProvider = (props: {children: ReactNode}) => {
    const [cart, setCart] = useState<DessertType[]>([])

    const changeCart = (newCart: DessertType[]) => {
        setCart(newCart)
    }

    return <CartContext.Provider value={{cart: cart, changeCart: changeCart}}>
        { props.children }
    </CartContext.Provider>
}

export default CartContextProvider