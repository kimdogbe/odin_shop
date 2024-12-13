import { Link } from "react-router-dom"
import ProductCard from "./components/ProductCard"
import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <h1>Shop page</h1>
      <p>Browse from our products below!</p>
      <div className="products">
        {products.map(product => 
          <ProductCard 
            key={product.id} 
            name={product.title} 
            description={product.description} 
            image={product.image}
            price={product.price}  
          />
        )
        }
      </div>
    </div>
  )
}

export default Shop