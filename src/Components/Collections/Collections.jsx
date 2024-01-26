import React, { useContext } from "react";
import Item from "../Item/Item";
import "./Collections.css";
import { ShopContext } from "../../Context/ShopContext.jsx";

const Collections = () => {
  const {all_product} = useContext(ShopContext);
  const items = all_product.slice(-8);
  return (
    <div className="Collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <ul className="items">
        {items.map((item, i) => {
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
        })}
      </ul>
    </div>
  );
};

export default Collections;
