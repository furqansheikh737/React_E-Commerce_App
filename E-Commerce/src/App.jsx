import React from 'react'
import Home from './pages/Home'
import Header from './components/hEADER.JSX'
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from './components/Cart';
import { productsData } from './api/Api';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App