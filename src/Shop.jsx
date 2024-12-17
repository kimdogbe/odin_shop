import { Link } from "react-router-dom"
import ProductCard from "./components/ProductCard"
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom"

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useOutletContext();

  function handleAdd(productId) {
    if (!cart.find((p) => p.id === productId)) {
      let product = products.find((p) => p.id === productId)
      product['count'] = 1
      setCart([...cart, product])
    }
    else {
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
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const response = await fetch("https://fakestoreapi.com/products?limit=12");
          const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div id="shop-section">
      <h1>Shop page</h1>
      <p>Browse from our products below!</p>
      <div className="products">
        {products.map(product => 
          <ProductCard 
            key={product.id} 
            id={product.id}
            name={product.title} 
            description={product.description} 
            image={product.image}
            price={product.price} 
            handleAdd={id => handleAdd(id)} 
          />
        )
        }
      </div>
    </div>
  )
}

export default Shop