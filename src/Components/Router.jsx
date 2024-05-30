import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Pages/Home";
import ErrorPage from "./ErrorPage";
import Menu from "./Pages/Menu";
import OurShop from "./Pages/OurShop";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "./Dashboard/AllUsers";
import AddItems from "./Dashboard/AddItems";
import ManageItems from "./Dashboard/ManageItems";
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
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // Admin releted route
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "addItems",
        element: <AddItems></AddItems>,
      },
    ],
  },
]);

export default router;
