import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products, { loadProducts } from "./pages/Products";
import Product, { loadProduct } from "./pages/Product";
import ProductIndex from "./pages/ProductIndex";
import MyAccount, { loadMyAccount } from "./pages/MyAccount";
import MyAccountEdit, { saveMyAccount } from "./pages/MyAccountEdit";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: loadProducts,
    children: [
      {
        index: true,
        element: <ProductIndex />,
      },
      {
        path: ":productID",
        element: <Product />,
        loader: loadProduct,
      },
    ],
  },
  {
    path: "/myaccount",
    element: <MyAccount />,
    loader: loadMyAccount,
  },
  {
    path: "/myaccount/edit",
    element: <MyAccountEdit />,
    loader: loadMyAccount,
    action: saveMyAccount,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
