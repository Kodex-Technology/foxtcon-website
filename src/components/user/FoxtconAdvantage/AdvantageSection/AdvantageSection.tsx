import React from "react";
import { DiamondIcon, SettingIcon, BarIcon } from "@/svgs";
import AdvantageCard from "@/components/common/AdvantageCard/AdvantageCard";
import "./Advantage.scss";
const AdvantageSection = () => {
  return (
    <div className="foxtcon-advantages-wrapper">
      <div className="container foxtcon-advantages-container">
        <div className="common-heading">
          <h2>
            The Foxtcon{" "}
            <span>
              Advantages
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>
            <br />
            Expertise. Innovation. Results
          </h2>
          <p>
            Foxtcon Hospitality combines industry expertise with forward-thinking strategy,
            delivering tailored hotel management solutions for branded and independent properties.
            Our hands-on executive team brings bold ideas, operational excellence, and a sharp
            focus on performance to every partnership.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-3">
            <AdvantageCard
              icon={<DiamondIcon />}
              title="Elite Luxury Operator"
              description="Trusted by the World’s Leading Hospitality Brands Foxtcon Hospitality expertly manages luxury properties for Marriott, Hilton, and Hyatt—delivering award-winning service and performance that top brands rely on."
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <AdvantageCard
              icon={<SettingIcon />}
              title="Lifestyle Hospitality Expertise"
              description="Distinctive Destinations. Curated Experiences. Foxtcon manages unique hotels and lifestyle properties, creating authentic stays through cultural insight, creativity, and operational excellence."
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <AdvantageCard
              icon={<BarIcon />}
              title="Revenue Engine"
              description="Maximizing Performance Through Strategy and Insight.Foxtcon boosts profitability through smart, data-driven strategies—optimizing pricing, distribution, and positioning for hotels and lifestyle brands."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
