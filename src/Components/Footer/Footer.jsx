import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { IoLogoPinterest } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="spacer"><p></p></div>
      <div className="Footer">
        <Link className="link" to={"/"}>
          <div className="footer-logo">
            <img src={logo} alt="..." />
            <h1 className="Text-medium">SHOPPER</h1>
          </div>
        </Link>
        <ul className="footer-tags">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li className="footer-icons">
            <CiInstagram />
          </li>
          <li className="footer-icons">
            <IoLogoPinterest />
          </li>
          <li className="footer-icons">
            <FaWhatsapp />
          </li>
        </ul>
        {/* <hr /> */}
        <small>Copyright @2024 - All Rights Reserved.</small>
      </div>
    </>
  );
};

export default Footer;
