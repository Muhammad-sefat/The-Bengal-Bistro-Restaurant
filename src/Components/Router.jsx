import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Pages/Home";
import ErrorPage from "./ErrorPage";
import Menu from "./Pages/Menu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <Menu></Menu>,
      },
    ],
  },
]);

export default router;
