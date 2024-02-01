import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListProduct.css";
import remove_icon from '../Assets/cart_cross_icon.png'


const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await axios.get(`${import.meta.env.VITE_ENDPOINT}getAllProducts`).then((res) => {
      setAllProducts(res.data.products);
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id)=>{
    await axios.post(`${import.meta.env.VITE_ENDPOINT}removeProduct`, {id:id}).then(async (res) => {
      if(res.data.success){
        await fetchInfo();
        
      }else{
        alert("Product not removed");
      }
    });
  }



  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((e, i) => {
          return <div className="listproduct-format-main listproduct-format" key={i}>
            <img src={e.image} alt="" className="listproduct-product-image" />
            <p>{e.name}</p>
            <p>${e.old_price}</p>
            <p>${e.new_price}</p>
            <p>{e.category}</p>
            <img src={remove_icon} onClick={()=>{removeProduct(e.id)}} className="listproduct-format-rmv-icn" alt="" />

          </div>;
        })}
      </div>
    </div>
  );
};

export default ListProduct;
