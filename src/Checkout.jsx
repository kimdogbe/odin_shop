import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom";
import NumberInput from "./components/NumberInput";
import AddButton from "./components/Button";

function Checkout() {
  const [cart, setCart] = useOutletContext();

  function handleIncrement(productId){
    const nextCart = cart.map(item => {
      if (item.id === productId){
        return {...item, count: item.count + 1 }
      }
      else {
        return item
      }
    })

    setCart(nextCart)
  }

  function handleDecrement(productId){
    const nextCart = cart.map(item => {
      if (item.id === productId){
        return {...item, count: item.count > 1 ? item.count - 1 : 1 }
      }
      else {
        return item
      }
    })

    setCart(nextCart)
  }

  function handleRemove(productId) {
    const nextCart = cart.filter(item => item.id !== productId)
    setCart(nextCart)
  }
  

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <p>Hello from the checkout page where we'll put content we have selected to buy.</p>
      {
        cart.map(item => 
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-detail">
              <p>{item.title}</p>
              <p>£{item.price} x {item.count}</p>
              <p>Total: £{(item.price * item.count).toFixed(2)}</p>
            </div>
            <div className="cart-item-buttons">
              <NumberInput count={item.count} 
              handleDecrement={() => handleDecrement(item.id)}
              handleIncrement={() => handleIncrement(item.id)}
              />
              <AddButton text="Remove" clickHandler={() => handleRemove(item.id)} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Checkout