import React from "react";
import "./BusinessDevelopment.scss";
const BusinessDevelopmentSection = () => {
  return (
    <div className="business-development-wrapper">
      <div className="common-heading">
        <h2>
          Business
          <span>
            Development
            <img src="/iconFiles/underline-heading.svg" alt="icon" />
          </span>
        </h2>
        <p>
          Foxtcon business model has always been to grow strategically with
          quality owners, never growing for the sake of growth. The goal of
          Crescent Hotels & Resorts Business Development is to assist owners in
          finding the best opportunities and operate effectively for a quick
          return on investment. 
        </p>
      </div>
      <div className="business-development-container">
        <div className="business-development-card">
          <div className="content-col">
            <div className="image-wrapper">
              <img src="/images/core-1.jpg" alt="img" />
            </div>
          </div>
          <div className="content-col">
            <div className="common-heading">
              <h2>
                Development Services and {""}
                <span>
                  Strategies
                  <img src="/iconFiles/underline-heading.svg" alt="icon" />
                </span>
              </h2>
              <p>
                To complement our hospitality management services, Crescent
                offers a full range of hotel development services. From
                pre-opening services to turn-key project management, our
                passionate team with years of expertise will take your property
                in the right direction for a successful opening.
              </p>
            </div>
          </div>
        </div>
        <div className="business-development-card order-reverse">
          <div className="content-col">
            <div className="image-wrapper">
              <img src="/images/core-1.jpg" alt="img" />
            </div>
          </div>
          <div className="content-col">
            <div className="common-heading">
              <h2>
                Deal{" "}
                <span>
                  Sourcing
                  <img src="/iconFiles/underline-heading.svg" alt="icon" />
                </span>
              </h2>
              <p>
                Crescent provides a broad range of services for hospitality
                investors. Our seasoned team helps source deals, underwrite and
                evaluate hotel acquisitions. Through our extensive network,
                Crescent connects investors with high-yielding investment
                opportunities with a focus on the top Metro Statistical Areas in
                the United States and major Canadian markets. Crescent&apos;s
                expertise in value-add is illustrated through improving
                operations or rebranding and renovating.
              </p>
            </div>
          </div>
        </div>
        <div className="business-development-card">
          <div className="content-col">
            <div className="image-wrapper">
              <img src="/images/core-1.jpg" alt="img" />
            </div>
          </div>
          <div className="content-col">
            <div className="common-heading">
              <h2>
                Pre-Opening and Procurement {""}
                <span>
                  Services
                  <img src="/iconFiles/underline-heading.svg" alt="icon" />
                </span>
              </h2>
              <p>
                Crescent is an industry leader with extensive pre-opening and
                procurement experience. We have successfully opened more than 80
                hotels across North America under internationally recognized
                brands within the Marriott, Hilton, Hyatt and IHG brand
                families, as well as independent resorts and boutiques. From
                design and architecture reviews to brand evaluations and debt
                sourcing, our hands-on approach and pre-opening expertise
                ensure your hotel ramps and stabilizes quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopmentSection;
