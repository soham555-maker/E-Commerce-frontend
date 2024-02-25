import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <p className="Text-small new-arrival">NEW ARRIVALS ONLY</p>
          <p className="Text-big">
            new <img src={hand_icon} className="hand-icon" alt="..." />
          </p>
          <p className="Text-big">collections</p>
          <p className="Text-big">for everyone</p>
          <div className="btn">
            <p>Latest Collections</p>  <img src={arrow} alt="=>" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
