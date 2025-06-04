import React from "react";
import "./DigitalPresence.scss";
const DigitalPresenceSection = () => {
  return (
    <div className="digital-presence-wrapper">
      <div className="content-col">
        <div className="image-layer-col">
          <img className="layer-one" src="/images/digital-1.png" alt="img" />
          <img className="layer-two" src="/images/digital-2.jpg" alt="img" />
        </div>
      </div>
      <div className="content-col">
        <div className="common-heading">
          <h2>
            The Foxtcon Market Influence &
            <span>
              Digital Presence
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
    </div>
  );
};

export default DigitalPresenceSection;
