import { useState } from "react"

const AddToCartBtn = () => {
  const [current, setCurrent] = useState<number>(0)
  
  function increment(){ setCurrent(prev => prev + 1) }
  function decrement(){ setCurrent(prev => prev - 1) }

  return (
    <>
        { current === 0 ?
          <button onClick={increment}>🛒Add to Cart</button> :
          <div>
            <button onClick={decrement}>-</button>
            {current}
            <button onClick={increment}>+</button>
          </div>
        }
    </>
  )
}

export default AddToCartBtn