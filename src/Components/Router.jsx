import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Pages/Home";
import ErrorPage from "./ErrorPage";
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
    ],
  },
]);

export default router;
