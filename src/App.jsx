import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <h2>Kays Shop</h2>
          <li id='home-btn'>
            <Link to="home">Home page</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
