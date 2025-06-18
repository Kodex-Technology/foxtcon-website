import React from "react";
import "./ConceptDevelopment.scss";
const ConceptDevelopmentSection = () => {
  return (
    <div className="concept-development-fluid px-0 container-fluid">
      <div className="container">
        <div className="concept-development-wrapper">
          <div className="content-col">
            <div className="common-heading">
              <p>Foxtcon Restaurant Group</p>
              <h2>
                Restaurant Management and{" "}
                <span>
                  Concept Development
                  <img src="/iconFiles/underline-heading.svg" alt="icon" />
                </span>
              </h2>
            </div>
            <div className="description">
              <h3>
                Crescent Restaurant Group Services{" "}
                <span>
                  The Crescent Restaurant Group offers dynamic solutions and
                  direction for the conceptualization, development, launch and
                  operations of hotel and resort restaurants.
                </span>
              </h3>
              <h3>
                Restaurant Concepts and Design{" "}
                <span>
                  We oversee all of your marketing platforms to ensure online
                  presence and profitability, including omnichannel monitoring.
                </span>
              </h3>
              <h3>
                Food Outlets as a Local Influence{" "}
                <span>
                  We develop restaurants and food and beverage concepts that
                  gain local and community influence to generate higher ROI for
                  owners.
                </span>
              </h3>
            </div>
          </div>
          <div className="content-col">
            <div className="image-layer-col">
              <img
                className="layer-one"
                src="/images/concept-1.jpg"
                alt="img"
              />
              <div className="layer-two">
                {" "}
                <img src="/images/concept-2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptDevelopmentSection;
