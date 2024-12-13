import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Checkout({ cart }) {
  return (
    <div>
      <h1>Checkout</h1>
      <p>Hello from the checkout page where we'll put content we have selected to buy.</p>
      {cart.map((item) => {
        <div>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>£{item.price}</p>
          <p>{item.count}</p>
          <p>Total: £{item.price * item.count}</p>
        </div>
      })}
    </div>
  )
}

Checkout.propTypes = {
  cart: PropTypes.object
}

export default Checkout