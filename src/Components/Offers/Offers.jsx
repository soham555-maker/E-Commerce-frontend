import React from "react";
import "./Offers.css";
import exclusive_offer_image from "../Assets/exclusive_image.png";
import arrow from "../Assets/arrow.png";

const Offers = () => {
  return (
    <div className="outer-offer-container">
      <div className="offers">
        <div className="offer-left">
          <div>
            <h1 className="Text-big">Exclusive</h1>
            <h1 className="Text-big">Offer For You</h1>

            <p className="Text-small">ONLY ON BEST SELLERS PRODUCT</p>
            <div className="login-btn checkout"><div>Check Out</div> <div><img src={arrow} alt="=>" /></div> </div>
          </div>
        </div>
        <div className="offer-right">
          <img src={exclusive_offer_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
