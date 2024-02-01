import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setall_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchProducts = async () => {
      // console.log(import.meta.env.VITE_ENDPOINT)
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_ENDPOINT}getAllProducts`
        );
        if (response.data.success) {
          setall_product(response.data.products);
        } else {
          console.error("Failed to fetch products:", response.data.message);
        }
      } catch (error) {
        console.error("Error during product fetch:", error);
      }
    };
    const fetchcart = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_ENDPOINT}getcart`,
          {
            token: localStorage.getItem("auth-token")
          }
          ,
          {
            headers: {
              Authorization: `${localStorage.getItem("auth-token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.success) {
          setCartItems(response.data.cart);
        } else {
          console.error("Failed to fetch cart:", response.data.message);
        }
      } catch (error) {
        console.error("Error during cart fetch:", error);
      }
    };

    fetchProducts();
    if (localStorage.getItem("auth-token")){
      fetchcart();
    }
  }, []);

  const addToCart = async (itemId) => {
    try {
      const productId = itemId;
      const apiEndpoint = `${import.meta.env.VITE_ENDPOINT}addtocart`;
      const authToken = localStorage.getItem("auth-token");

      const response = await axios.post(
        apiEndpoint,
        { productId },
        {
          headers: {
            Authorization: `${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      } else {
        window.location.replace("/login")
        console.error("Failed to add to cart:", response.data.message);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }


  const removeFromCart = async (itemId) => {
    try {
      const productId = itemId;
      const apiEndpoint = `${import.meta.env.VITE_ENDPOINT}removefromcart`;
      const authToken = localStorage.getItem("auth-token");

      const response = await axios.post(
        apiEndpoint,
        { productId },
        {
          headers: {
            Authorization: `${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      } else {
        console.error("Failed to remove from cart:", response.data.message);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const getTotal = () => {
    let total = 0;
    let count = 0;
    for (let index = 0; index < all_product.length + 1; index++) {
      if (cartItems[index] > 0) {
        count += cartItems[index];
        let iteminfo = all_product.find((product) => product.id === index);
        total += cartItems[index] * iteminfo.new_price;
      }
    }
    return { total: total, count: count };
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
