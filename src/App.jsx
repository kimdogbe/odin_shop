import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])

  console.log(cart)

  return (
    <div>
      <nav>
        <ul>
          <Link id='home-logo' to="/"><h2>Kays Shop</h2></Link>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="checkout">Checkout ({cart.length})</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={[cart, setCart]} />
    </div>
  )
}

export default App
