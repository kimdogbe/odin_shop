import App from "./App";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
];

export default routes;