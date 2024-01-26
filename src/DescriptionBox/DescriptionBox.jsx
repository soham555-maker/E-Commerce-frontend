import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-container">
      <div className="descriptionbox-titles">
        <div className="description">Description</div>
        <div className="reviews">Reviews (122)</div>
      </div>
      <div className="description-text">
        <p>
          An eCommerce website is an online destination where buyers shop for
          goods and sellers offer products and services. It’s the hub of
          information about a company and what they sell. On an eCommerce
          website, you’ll find product listings, eCommerce blog content, company
          history, and contact information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates reprehenderit atque, laboriosam aliquam neque sit praesentium odit dolorem sint tempore aspernatur minus sunt deleniti.
        </p>
        <br />
        <p>
          You can sell just about anything through an eCommerce site. Examples
          include recreational equipment, car and motorcycle parts, household
          goods, clothing and jewelry, and food and drinks. If you need help
          coming up with additional ideas, consider these wholesale items to
          sell or high demand products. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime, aspernatur laborum aut ullam fuga earum, cum accusamus dolorum corrupti quia quae. Cupiditate vero similique voluptatum, sapiente eos odio facere laborum sequi dignissimos rerum nostrum?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
