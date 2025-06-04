import React from "react";
import "./Map.scss";
const MapSection = () => {
  return (
    <div className="map-wrapper">
      <div className="common-heading">
        <p>Contact Us</p>
        <h2>
          We’d love to hear{" "}
          <span>
            from you
            <img
              src="/iconFiles/underline-heading.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>{" "}
        </h2>
        <p>We have offices and teams all around the world.</p>
      </div>
      <div className="map-container">
        <img src="/images/map.png" alt="" />
      </div>
      <div className="map-support-grid">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="map-support-card">
              <h3>Support</h3>
              <p>Our friendly team is here to help</p>
              <h2>support@foxtcon.com</h2>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="map-support-card">
              <h3>Sales</h3>
              <p>Question or queries? Get in touch</p>
              <h2>sales@foxtcon.com</h2>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="map-support-card">
              <h3>Phone</h3>
              <p>Mon-Fri from 8 am to 5 pm</p>
              <h2>+1 2031 0213 020</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
