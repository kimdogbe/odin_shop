import App from "./App";
import Profile from "./Home";
import About from "./About";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;