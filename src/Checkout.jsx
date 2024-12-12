import { Link } from "react-router-dom"

function Checkout() {
  return (
    <div>
      <h1>Checkout page</h1>
      <p>Hello from the checkout page where we'll put content we have selected to buy.</p>
      <p>Click here to return to <Link to="../home">Home page</Link></p>
    </div>
  )
}

export default Checkout