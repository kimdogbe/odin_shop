import PropTypes from "prop-types"
import stool from "../assets/stool.jpg"
import AddButton from "./Button"

function ProductCard({ id, name="High Stool", description="Sweedish designed high stool", image=stool, price="1", handleAdd }) {
  
  return <div className="product">
    <img src={image} alt={description} />
    <div>
      <h3>{name}</h3>
    </div>
    <div className="add-to-cart">
      <p>£{price}</p>
      <AddButton btnType="cart-add-btn" text="Add to Cart" clickHandler={() => handleAdd(id)}/>
    </div>
  </div>
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  handleAdd: PropTypes.func
}

export default ProductCard