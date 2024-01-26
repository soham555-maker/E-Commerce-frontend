import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";

const AdminNavbar = () => {

  return (
    <div>
      <nav>
        <Link
          className="link"
          to={"/admin"}
        >
          <div className="nav-logo-Admin">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p>SHOPPER</p>
              <p className="admin-text">Admin Pannel</p>
            </div>
          </div>
        </Link>
        <div className="nav-login">
          <Link className="link" to={"/login"}>
            <div className="login-btn">
              <p className="logn">Login</p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
