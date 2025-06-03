import React, { useState } from "react";
import { CoreIcon } from "@/svgs";
import "./CoreValue.scss";
const tabData = [
  {
    title: "Accountability",
    content: `At Foxtcon, we believe that direct experience drives success. Our personalized, hands-on approach to hotel management is crucial to consistent results and increased profitability. We are accountable to you and your success matters most to us.`,
  },
  {
    title: "Measurable Results",
    content: `We set high performance standards and track metrics across all operations. Our focus on results ensures profitability and measurable success at every stage.`,
  },
  {
    title: "Communication",
    content: `Transparent and consistent communication is the backbone of our operations. We work closely with partners to align strategies and keep all stakeholders informed.`,
  },
  {
    title: "Diversity",
    content: `We value diverse perspectives and foster inclusive environments that fuel creativity and innovation in our teams and guest experiences.`,
  },
];
const CoreValueSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="core-value-wrapper">
      <div className="common-heading">
        <h2>
          Foxtcon
          <span>
            Core Values
            <img
              src="/iconFiles/underline-heading.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>
        </h2>
      </div>
      <div className="content-overlay">
        <div className="content-col ">
          <div className="image-layer-col">
            <img className="layer-one" src="/images/core-1.jpg" alt="img" />
            <img className="layer-two" src="/images/core-2.jpg" alt="img" />
          </div>
        </div>
        <div className="content-col">
          <div className="core-content">
            <div className="core-content-header">
              <div className="description">
                <p>
                  Foxtcon Hospitality is a forward-thinking hotel management
                  company built by hoteliers, not just businesspeople. We are
                  operators at heart — hands-on leaders with deep industry
                  roots, driven by a passion for operational excellence and
                  sustainable growth. At Foxtcon, we go beyond traditional
                  management by offering customized strategies, cutting-edge
                  technology integration, and a relentless commitment to
                  performance.From boutique hotels to full-service resorts and
                  restaurants, we empower hospitality businesses to unlock their
                  full potential — optimizing the guest journey, capturing new
                  markets, and delivering exceptional returns.
                </p>
              </div>
              <div className="tabs-btn">
                {tabData.map((tab, index) => (
                  <button
                    key={index}
                    className={activeTab === index ? "active" : ""}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="tab-content">
              <div className="border-top-long"></div>
              <div className="border-left-small"></div>
              <CoreIcon />
              <div className="tab-card">
                <h1>{tabData[activeTab].title}</h1>
                <p>{tabData[activeTab].content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValueSection;
