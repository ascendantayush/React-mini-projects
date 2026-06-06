import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import style from "./styles/globals.scss";

import CountryDetails from "./components/CardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "country/:code",
        element: <CountryDetails />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <RouterProvider router={router} />
  </>,
);
