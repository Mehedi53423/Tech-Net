import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default routes;