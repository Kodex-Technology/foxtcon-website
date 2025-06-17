import React from "react";
import "./LifeStyle.scss";

const LifeStyleSection = () => {
  // const [showMore, setShowMore] = useState(false);
  // const previewWordsCount = 50;

  // const truncateText = (text: string) => {
  //   const words = text.split(" ");
  //   if (words.length <= previewWordsCount) return text;
  //   return words.slice(0, previewWordsCount).join(" ") + "...";
  // };
  return (
    <div className="life-style-wrapper">
      <div className="life-style-col image-layer-col">
        <img className="layer-one" src="/images/core-3.jpg" alt="img" />
        <div className="layer-two">
          <img src="/images/style-3.jpg" alt="img" />
        </div>
      </div>
      <div className="life-style-col content-col">
        <div className="image-wrapper">
          <img src="/iconFiles/foxtcon-color-logo.svg" alt="logo" />
        </div>
        <div className="common-heading">
          <h2>
            A City of Soul for
            <br />
            <span>
              Curious Wanderers
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>
          </h2>
        </div>
        <div className="description">
          <p>
            We are storytellers and taste-chasers. Experience Kansas City’s
            bold blend of history, flavor, and creativity—where iconic culture meets modern discovery.
          </p>
          <p>
            From smoky jazz to sizzling BBQ, every corner invites you to live louder and travel deeper.
          </p>
          {/* <p>
            {showMore ? section.description : truncateText(section.description)}
          </p> */}
        </div>
        <div className="btn-wrapper">
          {/* <button onClick={() => setShowMore((prev) => !prev)}>
            {showMore ? "Show Less" : "Learn More"}
          </button> */}
          <button>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleSection;
