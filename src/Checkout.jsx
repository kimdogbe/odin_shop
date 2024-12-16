import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useOutletContext();

  console.log("Checkout:")
  console.log(cart);
  

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <p>Hello from the checkout page where we'll put content we have selected to buy.</p>
      {
        cart.map(item => 
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>£{item.price} x {item.count}</p>
            <p>Total: £{(item.price * item.count).toFixed(2)}</p>
          </div>
        )
      }
    </div>
  )
}

export default Checkout