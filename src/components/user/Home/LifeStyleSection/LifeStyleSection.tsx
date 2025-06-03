import React from "react";
import "./LifeStyle.scss";
const LifeStyleSection = () => {
  return (
    <div className="life-style-wrapper">
      <div className="life-style-col image-layer-col">
        <img className="layer-one" src="/images/banner-1.jpg" alt="img" />
        <img className="layer-two" src="/images/banner-1.jpg" alt="img" />
      </div>
      <div className="life-style-col content-col">
        <div className="image-wrapper">
          <img src="/iconFiles/foxtcon-color-logo.svg" alt="logo" />
        </div>
        <div className="common-heading">
          <h2>
            A Lifestyle Collection for 
            <span>
              Inspired Travelers
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>{" "}
          </h2>
        </div>
        <div className="description">
          <p>
            We are rule-breakers and trendsetters. Discover a modern,
            individualistic approach and unique concepts that deliver
            extraordinary travel experiences and revenue growth.
          </p>
        </div>
        <div className="btn-wrapper">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleSection;
