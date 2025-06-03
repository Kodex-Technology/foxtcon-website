import React from "react";
import "./GlobalConnection.scss";
const GlobalConnectionSection = () => {
  return (
    <div className="global-connection-wrapper">
      <div className="content-col">
        <div className="common-heading">
          <h2>
            Expansive & Strategic Sales Partnerships{""}
            <span>
              Global Connections
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>
          </h2>
          <p>
            Foxtcon delivers comprehensive digital marketing support, including
            expert website development, advanced SEO optimization, targeted
            online marketing strategies, dynamic social media management, and
            seamless CRM integration — all designed to enhance brand visibility,
            engage customers effectively, and drive sustainable business growth.
          </p>
        </div>
      </div>
      <div className="content-col">
        <div className="image-layer-col">
          <img className="layer-one" src="/images/global-1.jpg" alt="img" />
          <img className="layer-two" src="/images/global-2.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default GlobalConnectionSection;
