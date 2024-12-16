import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Button({ btnType = 'generalBtn', text = 'Click me', clickHandler}) {
  return <button onClick={clickHandler} className={btnType} >{text}</button>
}

Button.propTypes = {
  btnType: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func,
}

export default Button