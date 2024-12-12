import { Link } from "react-router-dom"
import ProductCard from "./components/ProductCard"

function Shop() {
  return (
    <div>
      <h1>Shop page</h1>
      <p>Browse from our products below!</p>
      <ProductCard />
    </div>
  )
}

export default Shop