import { Link } from "react-router-dom"

function AddButton({ to, btnType = 'generalBtn', text = 'Click me' }) {
  return <Link to={to}> <button className={btnType} >{text}</button></Link>
}

export default AddButton