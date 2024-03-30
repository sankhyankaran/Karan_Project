import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import "../index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
