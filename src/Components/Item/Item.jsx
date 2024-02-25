import React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="Item">
      <Link to={`/product/${props.id}`}><img onClick={window.scroll(0,0)} src={props.image} alt="..." /></Link>
      <p className="item-card-text">{props.name}</p>
      <div className="prices item-card-text">
        <div className="new-price">
          <p>${props.new_price}</p>
        </div>
        <div className="old-price">
          <p>${props.old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
