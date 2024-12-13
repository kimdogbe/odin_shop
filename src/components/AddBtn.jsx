import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function AddButton({ btnType = 'generalBtn', text = 'Click me', clickHandler}) {
  return <button onClick={clickHandler} className={btnType} >{text}</button>
}

AddButton.propTypes = {
  btnType: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func,
}

export default AddButton