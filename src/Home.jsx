import Button from "./components/AddBtn"

function Home() {
  return (
    <div>
      <h1>Hello and welcome to our store!</h1>
      <p>We hope you find what you're looking for</p>
      <Button text="Shop" to="/shop" />
    </div>
  )
}

export default Home