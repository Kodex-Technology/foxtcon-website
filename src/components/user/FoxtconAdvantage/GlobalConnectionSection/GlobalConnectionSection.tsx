import React from "react";
import "./GlobalConnection.scss";
const GlobalConnectionSection = () => {
  return (
    <div className="global-connection-wrapper">
      <div className="content-col">
        <div className="common-heading">
          <h2>
            Expansive & Strategic Sales Partnerships{" "}
            <span>
              Global Connections
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>
          </h2>
          <p>
            At Foxtcon, we empower brands through a full spectrum of digital
            marketing solutions — from high-impact website development and
            precision SEO to data-driven online campaigns, dynamic social media
            engagement, and seamless CRM integration. Our strategic approach is
            designed to elevate brand visibility, deepen customer engagement,
            and accelerate long-term business growth across global markets.
          </p>
        </div>
      </div>
      <div className="content-col">
        <div className="image-layer-col">
          <img className="layer-one" src="/images/global-1.jpg" alt="img" />
          <div className="layer-two">
            <img src="/images/global-2.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalConnectionSection;
