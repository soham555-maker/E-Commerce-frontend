import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, addToCart, getTotal } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((p, i) => {
        if (cartItems[p.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-format">
                <img src={p.image} alt=""  className="cartitems-format-image"/>
                <p className="cart-product-name">{p.name}</p>
                <p className="cart-product-price">${p.new_price}</p>
                <p className="cartitems-quantity" >{cartItems[p.id]}</p>
                <p>${p.new_price*cartItems[p.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(p.id)}} className="cartitems-format-rmv-icn" alt="" />
              </div>
              <hr />
              
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            
            <div className="cartitems-total-left">
                <h1>cart Total</h1>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotal().total}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotal().total}</h3>
                </div>
                <button className="checkout-cart ">PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promocode-inside">
                    <input type="text" placeholder="promo code" />
                    <button className="cart-submit-btn">Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
