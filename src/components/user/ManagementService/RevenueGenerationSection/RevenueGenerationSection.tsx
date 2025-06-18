import React from "react";
import "./RevenueGeneration.scss";
const RevenueGenerationSection = () => {
  return (
    <div className="container">
      <div className="revenue-generation-wrapper">
        <div className="content-col">
          <div className="image-layer-col">
            <img className="layer-one" src="/images/revenue-1.jpg" alt="img" />
            <div className="layer-two">
              {" "}
              <img src="/images/revenue-2.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="content-col">
          <div className="common-heading">
            <p>Commercial Strategy</p>
            <h2>
              A Powerful Approach to{" "}
              <span>
                Revenue Generation
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>
            </h2>
          </div>
          <div className="description">
            <h3>
              Revenue Management{" "}
              <span>
                From brand strategies and due diligence to data analysis, we
                ensure your asset is generating revenue and maximizing your
                investment.
              </span>
            </h3>
            <h3>
              Integrated Marketing + Digital Solutions{" "}
              <span>
                We oversee all of your marketing platforms to ensure online
                presence and profitability, including omnichannel monitoring.
              </span>
            </h3>
            <h3>
              Direct Sales{" "}
              <span>
                Our experienced team develops a custom marketing plan using
                competitive intelligence, tracking tools, sales campaigns and
                brand maximization.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueGenerationSection;
