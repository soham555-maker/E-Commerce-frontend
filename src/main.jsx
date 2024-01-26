import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Shop from './Pages/Shop';
import ErrorPage from './error-page';
import ShopCatagory from './Pages/ShopCatagory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ShopContextProvider from './Context/ShopContext.jsx';
import Admin from './Admin.jsx';
import AdminHomePage from './Pages/AdminHomePage.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import ListProduct from './Components/ListProduct/ListProduct.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Shop />,
        errorElement: <ErrorPage/>
      },
      {
        path:"mens",
        element: <ShopCatagory catagory="men" />,
        errorElement: <ErrorPage/>
      },
      {
        path:"womens",
        element: <ShopCatagory catagory="women" />,
        errorElement: <ErrorPage/>
      },
      {
        path:"kids",
        element: <ShopCatagory catagory="kid" />,
        errorElement: <ErrorPage/>
      },
      {
        path:"login",
        element: <LoginSignup/>,
        errorElement: <ErrorPage/>
      },
      {
        path:"cart",
        element: <Cart/>,
        errorElement: <ErrorPage/>
      },
      {
        path:"product/:productId",
        element: <Product/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
  {
    path:'/admin',
    element: <Admin/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <AdminHomePage />,
        errorElement: <ErrorPage/>
      },
      {
        path: "addproduct",
        element: <AddProduct />,
        errorElement: <ErrorPage/>
      },
      {
        path: "listproduct",
        element: <ListProduct />,
        errorElement: <ErrorPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ShopContextProvider>
    <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>,
)
