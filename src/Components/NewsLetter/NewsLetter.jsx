import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div>
      <div className="outer-newsletter-container">
        <div className="newsletters">
          <p className="Text-medium">Get Exclusive Offers on Your Email</p>
          <p className="Text-small">Suscribe to our newsletter and stay updated</p>
          <div className="newsletters-form">
            <form action="">
              <input type="email" name="email" placeholder="Your Email Id" />
              <button className="login-btn" id="suscribe">Suscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
