import React from "react";
import "./Map.scss";
const MapSection = () => {
  return (
    <div className="container">
      <div className="map-wrapper">
        <div className="common-heading">
          <p>Connect With Us</p>
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
          <p>
            With teams and offices across the globe, Foxtcon Hospitality is
            always within reach. Whether you’re looking to partner, collaborate,
            or simply say hello—we’re here and ready to connect
          </p>
        </div>
        <div className="map-container">
          <img src="/images/map-1.png" alt="" />
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
                <h2>(816) 499-1531</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
