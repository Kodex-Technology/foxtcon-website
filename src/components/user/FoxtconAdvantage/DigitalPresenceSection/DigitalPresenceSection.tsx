import React from "react";
import "./DigitalPresence.scss";
const DigitalPresenceSection = () => {
  return (
    <div className="digital-presence-wrapper">
      <div className="content-col">
        <div className="image-layer-col">
          <img className="layer-one" src="/images/digital-1.png" alt="img" />
          <div className="layer-two">
            {" "}
            <img src="/images/digital-2.jpg" alt="img" />
          </div>
        </div>
      </div>
      <div className="content-col">
        <div className="common-heading">
          <h2>
            Market Influence &{" "}
            <span>
              Digital Presence
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>
            <br />
            Smart Visibility, Seamless Impact
          </h2>
          <p>
            Foxtcon Hospitality empowers brands with a full-spectrum digital
            marketing approach designed to captivate, convert, and grow. From
            expertly crafted websites and advanced SEO to precision-targeted
            campaigns, dynamic social media management, and integrated CRM
            solutions—we ensure your brand stands out in a competitive digital
            landscape.
            <br />
            Our strategies are built to elevate visibility, deepen customer
            engagement, and drive sustainable business growth across every
            digital touchpoint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalPresenceSection;
