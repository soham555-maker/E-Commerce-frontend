import React, {useContext} from "react";
import Item from "../Item/Item";
import "./Popular.css";
import { ShopContext } from "../../Context/ShopContext.jsx";


const Popular = (props) => {
  const {all_product} = useContext(ShopContext);
  const items = all_product.slice(0,4);
  return (
    
    <div className="Popular">
      <h1>Popular In {props.catagory}</h1>
      <hr />
      <div className="items">
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
      </div>
    </div>
  );
};

export default Popular;
