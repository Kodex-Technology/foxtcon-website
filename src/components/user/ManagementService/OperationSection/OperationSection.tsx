import React from "react";
import "./Operation.scss";
const OperationSection = () => {
  return (
    <div className="operation-wrapper">
      <div className="common-heading">
        <h2>
          <span>
            Operations
            <img src="/iconFiles/underline-heading.svg" alt="icon" />
          </span>
        </h2>
        <p>
          The success of your hotel is contingent upon the seamless integration
          of operations, from guest services to financial management. At
          Crescent, our hotel management and operations programs are time-tested
          and proactive to adapt to external shifts and the goals of our
          clients.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="operation-card">
            <div className="content-layer">
              <h1>Proactive Operations</h1>
              <p>
                We work as an extension of your hotel ownership to execute a
                sound business plan for your business.
              </p>
              <p>
                Provide hands-on, professional hotel and resort management
                services
              </p>
              <p>
                Deliver superior financial performance while improving asset
                value
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/operation-1.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="operation-card">
            <div className="content-layer">
              <h1>Hospitality Financial Management</h1>
              <p>
                Your hotel&apos;s profitability begins and ends with your
                balance sheet. At Crescent Hotels & Resorts, we specialize in
                sound financial management for the hospitality industry,
                ensuring efficient financial operations through our centralized
                accounting services.
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/operation-2.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="operation-card reverse-position">
            <div className="content-layer">
              <h1>Information technology that powers productivity</h1>
              <p>
                Crescent Hotels & Resorts offers information technology
                services, tools and partnerships to ensure your hotels run at
                peak performance. Our IT services include telecommunications,
                credit card processing, cloud-based collaborations and
                maintenance. We streamline your operations through web-based
                platforms, as well as preferred partnerships with senior
                technology leaders within the industry.
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/operation-3.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="operation-card reverse-position">
            <div className="content-layer">
              <h1>GROWTH FOCUSED, HANDS ON</h1>
              <p>
                With a diverse portfolio across North America, Crescent offers
                hands-on operations of brands, independent boutiques, luxury
                hotels, resorts and lifestyle collections. Our strength is in
                our proactive approach and flexibility to create growth
                strategies around the environment of each property.
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/operation-4.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationSection;
