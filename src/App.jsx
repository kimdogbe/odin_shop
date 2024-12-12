import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li id='home-btn'>
            <Link to="home">Home page</Link>
          </li>
          <li>
            <Link to="about">About page</Link>
          </li>
          <li>
            <Link to="checkout">Checkout page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
