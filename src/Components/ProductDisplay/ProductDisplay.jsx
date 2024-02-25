import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";

const ProductDisplay = () => {
  const { productId } = useParams(); // Extracting product ID from the URL
  const { all_product, addToCart } = useContext(ShopContext);

  // Finding the product with the extracted ID from the URL
  const product = all_product.find((product) => product.id === parseInt(productId));

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="img-list-1 sml-img">
          <img src={product.image} className="sml-img"  alt="" />
        </div>
        <div className="img-list-2 ">
          <img src={product.image} className="sml-img"  alt="" />
        </div>
        <div className="img-list-3 ">
          <img src={product.image} className="sml-img"  alt="" />
        </div>
        <div className="img-list-4 ">
          <img src={product.image} className="sml-img"  alt="" />
        </div>
        <div className="main-img" >
          <img src={product.image} className="big-img"  alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="star-rating">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <small>(122)</small>
        </div>
        <div className="productdisplay-prices">
          <div className="old">${product.old_price}</div>
          <div className="new">${product.new_price}</div>
        </div>
        <div className="productdisplay-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea,
          maiores dicta ex voluptatem ut! Aliquid doloremque reiciendis minima
          quas! Lorem ipsum dolor sit.
        </div>
        <div className="size">
          <h3>Select Size</h3>
          <div className="size-b">
            <b>S</b>
            <b>M</b>
            <b>L</b>
            <b>XL</b>
            <b>XXL</b>
          </div>
          <br />
        </div>
        <div className="cart-btn-outer-container">
          <div className="cart-btn login-btn" onClick={()=>{addToCart(product.id)}}>ADD TO CART</div>
        </div>
        <div className="productdisplay-info">
          <p>
            Catagory: {product.category.toUpperCase()}, T-shirt, Crop-Top,...
          </p>
          <p>Tags: Modern, Latest, Fashion,...</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDisplay;

