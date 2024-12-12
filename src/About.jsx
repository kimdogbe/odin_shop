import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>Hello from the about page where we put a little explanation of what it is we do.</p>
      <p>Click here to return to <Link to="../home">Home page</Link></p>
    </div>
  )
}

export default About