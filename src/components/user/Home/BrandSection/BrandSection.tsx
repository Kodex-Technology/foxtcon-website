import React from "react";
import "./Brand.scss";
const BrandSection = () => {
  return (
    <div className="brand-wrapper">
      <div className="common-heading">
        <h2>
          Brand{" "}
          <span>
            Partners
            <img src="/iconFiles/underline-heading.svg" alt="icon" />
          </span>{" "}
        </h2>
      </div>
      <div className="brand-grid">
        <div className="brand-col">
          <img src="/images/brand-8.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-9.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-10.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-11.svg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
