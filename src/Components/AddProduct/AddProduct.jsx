import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../AdminPanelAssets/upload_area.svg";
import axios from "axios";
import all_product from "../Assets/all_product.js";

const AddProduct = () => {
  const [img, setImg] = useState(upload_area);
  const [productDetails, setProductDetails] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "men", // default category
  });

  const imgHandler = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);
      setImg(imgUrl);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      let product = productDetails;
      const thumbnail = document.getElementById("file-input");

      if (thumbnail && thumbnail.files.length > 0) {
        const formData = new FormData();
        console.log(thumbnail.files[0]);
        formData.append("product", thumbnail.files[0]);

        const response = await axios.post(
          `${import.meta.env.VITE_ENDPOINT}uploadImg`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const responseData = response.data;
        if (responseData.sucess) {
          product.image = responseData.image_url;
          const addProductRes = await axios
            .post(`${import.meta.env.VITE_ENDPOINT}allProductsAdd`, product)
            .then((res) => {
              alert("Product Added");
              console.log("Server Response:", res.data);
            });
        } else {
          alert("Request Failed! Please Try Again.");
        }
        // Use responseData as needed
      } else {
        console.error("No file selected");
        alert(
          "Request Failed! Selecting a file is IMPORTANT!!! Please Try Again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleAddALLProduct = async (product) => {
    try {
      // Use the product data to create the form data
      const response2 = await fetch(product.image);
      let yourstring = response2.url;
      var index = yourstring.lastIndexOf("/") + 1;
      var filename = yourstring.substr(index);
      console.log(filename);
      const content = await response2.blob();
      console.log(content);

      // Create a File object with the fetched content
      const imageFile = new File([content], filename, {
        type: content.type,
        lastModified: content.lastModified,
        lastModifiedDate: content.lastModifiedDate,
      });
      console.log({file:imageFile});
      const formData = new FormData();
      formData.append("product", imageFile);

      // Make the first Axios request for image upload
      const response = await axios.post(
        `${import.meta.env.VITE_ENDPOINT}uploadImg`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const responseData = response.data;
      console.log(responseData)

      if (responseData.sucess) {
        // Update the product image URL
        product.image = responseData.image_url;

        // Make the second Axios request to add the product
        const addProductRes = await axios.post(
          `${import.meta.env.VITE_ENDPOINT}allProductsAdd`,
          product
        );
        console.log("Server Response:", addProductRes.data);

        // Alert or handle success as needed
        alert("Product Added");
      } else {
        alert("Request Failed! Please Try Again.");
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response Data:", error.response.data);
        console.error("Response Status:", error.response.status);
        console.error("Response Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No Response Received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request Setup Error:", error.message);
      }
    }
  };

  const addAllProducts = async () => {
    try {
      // Iterate over all products and call handleAddProduct for each
      for (const product of all_product) {
        await handleAddALLProduct(product);
      }

      // Optional: Provide a final success message or perform additional actions
      alert("All Products Added Successfully!");
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that may occur during the process
      alert("Error Adding Products. Please Try Again.");
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productDetails.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Old Price"
            value={productDetails.old_price}
            onChange={handleInputChange}
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            placeholder="New Price"
            value={productDetails.new_price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          className="add-product-selector"
          value={productDetails.category}
          onChange={handleInputChange}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={img} alt="" className="addproduct-thumbnail-img" />
        </label>
        <input
          onChange={imgHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
        <button className="addproduct-btn" onClick={handleAddProduct}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
