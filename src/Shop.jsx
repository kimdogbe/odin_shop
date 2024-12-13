import { Link } from "react-router-dom"
import ProductCard from "./components/ProductCard"
import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      // let tempList = []
      try {
          const response = await fetch("https://fakestoreapi.com/products?limit=5");
          const data = await response.json();
          // const body = data.data;
          // tempList = 
          //   [...tempList, 
          //     { id: body.id, 
          //       name: body.title,
          //       artist: body.artist_title,
          //       type: body.department_title,
          //       image: imageEndpoint.replace('{identifier}', body.image_id)
          //     }
          //   ];
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Shop