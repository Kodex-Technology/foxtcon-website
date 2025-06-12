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
          </h2>
          <p>
            Foxtcon offers a broad range of hotel management resources and
            strategies that produce measurable results. We have vast hotel
            management experience with brands and independents, and you always
            have access to the innovative minds of our executive team.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-3">
            <AdvantageCard
              icon={<DiamondIcon />}
              title="Luxury Operator"
              description="Award-winning elite operator approved for all upper-upscale and luxury brands within the Marriott, Hilton and Hyatt brands"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <AdvantageCard
              icon={<SettingIcon />}
              title="Lifestyle Expertise"
              description="Extensive experience with independent hotels and resorts and lifestyle brands under Crescent's Latitudes Collection"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <AdvantageCard
              icon={<BarIcon />}
              title="Revenue Engine"
              description="Extensive experience with independent hotels and resorts and lifestyle brands under Crescent's Latitudes Collection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
