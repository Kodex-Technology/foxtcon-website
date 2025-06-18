import React from "react";
import {
  TechIcon,
  DocCheckIcon,
  FoxtconGroupIcon,
  LightIcon,
  BuildingIcon,
  SettingIcon,
} from "@/svgs";
import AdvantageCard from "@/components/common/AdvantageCard/AdvantageCard";
import "./Overview.scss";
const OverviewSection = () => {
  return (
    <div className="container-fluid px-0 overview-fluid">
      <div className="container">
        <div className="overview-wrapper">
          <div className="common-heading">
            <h2>
              <span>
                Overview
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>
            </h2>
            <p>
              Foxtcon Hotels & Resorts is built on a results-driven paradigm
              with hands-on experts across the hospitality industry. As
              entrepreneurs and operators at heart, we have a deep understanding
              of developing, operating and renovating our properties.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <AdvantageCard
                icon={<SettingIcon />}
                title="Business Development"
                description="We offer a clear asset and development plan with relationships across major brands and networks, from due diligence and brand support to transactions and sourcing."
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <AdvantageCard
                icon={<BuildingIcon />}
                title="Hotel Operations"
                description="The success of your hotel is the result of seamless operations, from guest experiences to financial management. With an intricate knowledge of market dynamics and hands-on management, Crescent ensures your hotels are profitable."
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <AdvantageCard
                icon={<LightIcon />}
                title="Commercial Strategy"
                description="Our multi-faceted plans include direct sales, eCommerce, revenue management and digital marketing to help your hotel business achieve greater occupancy, increased revenue and return on investment."
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <AdvantageCard
                icon={<FoxtconGroupIcon />}
                title="Foxtcon Restaurant Group"
                description="Our group of talented restaurateurs offers dynamic solutions and direction for the development, launch and operations of hotel and resort restaurants. From concept and design to culinary arts, our team offers creativity and experience to drive revenue."
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <AdvantageCard
                icon={<DocCheckIcon />}
                title="Project Management"
                description="Project Management at Crescent is a turnkey operation with oversight of the entire capital improvement project process. Our team has a solid background in all aspects of hospitality, including extensive capital projects and procurement."
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <AdvantageCard
                icon={<TechIcon />}
                title="Technology"
                description="Power your productivity, operations and business intelligence with technology services, platforms and alliances that ensure your hotels and resorts run at peak performance."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
