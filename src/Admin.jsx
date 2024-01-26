import React from "react";
import AdminNavbar from "./Components/Navbar/Admin-Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Product_cart from './Components/AdminPanelAssets/Product_Cart.svg'
import Product_list_icon from './Components/AdminPanelAssets/Product_list_icon.svg'
import './Admin.css';

const Admin = () => {
  return (
    <div>
      <header>
        <AdminNavbar />
      </header>
      <main>
        <div className="adminHome">
          <div className="sidebar">
            <Link to={"/admin/addproduct"} style={{ textDecoration: "none" }}>
              <div className="sidebar-item">
                <img src={Product_cart} alt="" />
                <p>Add Product</p>
              </div>
            </Link>
            <Link to={"/admin/listproduct"} style={{ textDecoration: "none" }}>
              <div className="sidebar-item">
                <img src={Product_list_icon} alt="" />
                <p>Product List</p>
              </div>
            </Link>
          </div>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Admin;
