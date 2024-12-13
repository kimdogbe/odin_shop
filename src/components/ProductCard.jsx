import stool from "../assets/stool.jpg"
import AddButton from "./AddBtn"

function ProductCard({ name="High Stool", description="Sweedish designed high stool", image=stool, price="£1" }) {
  return <div className="product">
    <img src={image} alt={description} />
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>

    <AddButton text="Add to Cart"/>
  </div>
}

export default ProductCard