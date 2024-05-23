import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Components/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
        <Toaster></Toaster>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
