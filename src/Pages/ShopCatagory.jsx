import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import banner_womens from "../Components/Assets/banner_women.png";
import banner_mens from "../Components/Assets/banner_mens.png";
import banner_kids from "../Components/Assets/banner_kids.png";
// import all_product from "../Components/Assets/all_product";
import Item from "../Components/Item/Item";
import "./CSS/ShopCatagory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ShopCatagory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className="shop-catagory">
      {props.catagory === "men" && (
        <img src={banner_mens} alt="" className="banner" />
      )}
      {props.catagory === "women" && (
        <img
          src={banner_womens}
          alt=""
          className="banner"
          style={{
            marginTop: "92px",
            width: "99vw",
            backgroundClip: "var(--semi-doninanat)",
          }}
        />
      )}
      {props.catagory === "kid" && (
        <img
          src={banner_kids}
          alt=""
          className="banner"
          style={{
            marginTop: "92px",
            width: "99vw",
            backgroundClip: "var(--semi-doninanat)",
          }}
        />
      )}
      {/* <Popular catagory={count}/> */}
      <div className="shopcatagory-info">
        <p>
          <b>Showing 1-12</b> out of 36 products
        </p>
        <div className="shopcatagory-sort login-btn">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatagory-products">
        {all_product.map((item, i) => {
          if (props.catagory === item.category) {
            return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  image={item.image}
                />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcatagory-explore login-btn">
        Explore More
      </div>
    </div>
  );
};

export default ShopCatagory;
