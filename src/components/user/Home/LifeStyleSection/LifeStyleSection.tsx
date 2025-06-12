import React, { useState } from "react";
import "./LifeStyle.scss";
const section = {
  description: `We are rule-breakers and trendsetters. Discover a modern,
    individualistic approach and unique concepts that deliver
    extraordinary travel experiences and revenue growth. Our team is passionate
    about crafting personalized journeys, connecting cultures, and pioneering
    sustainable travel. Experience the difference that innovation and dedication
    bring to every adventure. We focus on creating lasting memories that inspire
    and enrich the lives of travelers around the globe. Our commitment is to
    exceed expectations with every detail thoughtfully considered, ensuring
    unmatched quality and service throughout every step of the journey. Join us
    in redefining travel with creativity, passion, and a dedication to
    excellence.`,
};
const LifeStyleSection = () => {
  const [showMore, setShowMore] = useState(false);
  const previewWordsCount = 50;

  const truncateText = (text: string) => {
    const words = text.split(" ");
    if (words.length <= previewWordsCount) return text;
    return words.slice(0, previewWordsCount).join(" ") + "...";
  };
  return (
    <div className="life-style-wrapper">
      <div className="life-style-col image-layer-col">
        <img className="layer-one" src="/images/core-1.jpg" alt="img" />
        <div className="layer-two">
          <img src="/images/style-2.jpg" alt="img" />
        </div>
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
            {showMore ? section.description : truncateText(section.description)}
          </p>
        </div>
        <div className="btn-wrapper">
          <button onClick={() => setShowMore((prev) => !prev)}>
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleSection;
