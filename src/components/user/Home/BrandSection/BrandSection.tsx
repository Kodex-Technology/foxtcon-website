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
          <img src="/images/brand-1.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-2.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-3.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-4.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-5.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-6.svg" alt="img" />
        </div>
        <div className="brand-col">
          <img src="/images/brand-7.svg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
