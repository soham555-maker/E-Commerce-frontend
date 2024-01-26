import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { IoMdCart } from "react-icons/io";
import { ShopContext } from "../../Context/ShopContext";
// import dropdown_icon from '../Assets/dropdown_icon.png'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Navbar = ({ getCatagory2 }) => {
  const [catagories, setCatagories] = useState("shop");
  const { getTotal } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    console.log("open");
    menuRef.current.classList.toggle("navbar-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div>
      <nav>
        <Link
          className="link"
          to={"/"}
          onClick={() => {
            setCatagories("shop");
            getCatagory2("shop");
          }}
        >
          <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
          </div>
        </Link>
        <div className="nav-catagories">
          <MdOutlineArrowDropDownCircle
            size={30}
            className="nav-dropdown"
            onClick={dropdown_toggle}
          />
          <div className="navMenu" ref={menuRef}>
            <ul>
              <Link className="link" to={"/"}>
                <li
                  className="catagories"
                  onClick={() => {
                    setCatagories("shop");
                    getCatagory2("shop");
                  }}
                >
                  Shop
                  {catagories === "shop" && <hr />}
                </li>
              </Link>
              <Link className="link" to={"/mens"}>
                <li
                  className="catagories"
                  onClick={() => {
                    setCatagories("mens");
                    getCatagory2("mens");
                  }}
                >
                  Mens
                  {catagories === "mens" && <hr />}
                </li>
              </Link>
              <Link className="link" to={"/womens"}>
                <li
                  className="catagories"
                  onClick={() => {
                    setCatagories("womens");
                    getCatagory2("womens");
                  }}
                >
                  Womens
                  {catagories === "womens" && <hr />}
                </li>
              </Link>
              <Link className="link" to={"/kids"}>
                <li
                  className="catagories"
                  onClick={() => {
                    setCatagories("kids");
                    getCatagory2("kids");
                  }}
                >
                  Kids
                  {catagories === "kids" && <hr />}
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="nav-login">
          <Link className="link" to={"/login"}>
            {localStorage.getItem("auth-token") ? (
              <div
                className="login-btn"
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.reload();
                  window.location.replace("/");
                }}
              >
                <p className="logn">Logout</p>
              </div>
            ) : (
              <div className="login-btn">
                <p className="logn">Login</p>
              </div>
            )}
          </Link>
          <Link className="link" to={"/cart"}>
            <IoMdCart className="cart-icon" size={35} />
            <div className="cart-products-counter">
              <p>{getTotal().count}</p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
