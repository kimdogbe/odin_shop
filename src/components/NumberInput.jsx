function NumberInput({ count, handleDecrement, handleIncrement}) {
  return <div className="number-input">
    <button onClick={handleDecrement}>-</button>
    <p>{count}</p>
    <button onClick={handleIncrement}>+</button>
  </div>
}

export default NumberInput