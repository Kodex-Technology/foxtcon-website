import React, { useState } from "react";
import { CoreIcon } from "@/svgs";
import "./CoreValue.scss";
const tabData = [
  {
    title: "Accountability",
    subTitle: "Your Success Is Our Responsibility",
    content: `At Foxtcon, we believe that true leadership comes from experience. Our hands-on, personalized approach to hotel management ensures consistent performance and measurable growth. We take ownership of every detail—because your goals are our goals. With unwavering dedication and operational precision, we hold ourselves accountable to the highest standards—delivering results that matter.`,
  },
  {
    title: "Measurable Results",
    subTitle: "Driven by Data. Focused on Impact.",
    content: `At Foxtcon, we hold ourselves to the highest standards of performance. Every strategy we implement is backed by data, tracked through key metrics, and refined for maximum impact. From operations to guest satisfaction, we measure what matters—ensuring profitability, transparency, and success at every stage of your hospitality journey`,
  },
  {
    title: "Communication",
    subTitle: "Clear. Consistent. Collaborative.",
    content: `At Foxtcon, transparent communication is at the heart of everything we do. We believe that strong partnerships are built on trust, and trust begins with clarity. By maintaining open, consistent dialogue, we ensure that every strategy is aligned, every stakeholder is informed, and every decision is made with confidence`,
  },
  {
    title: "Diversity",
    subTitle: "Empowering voices. Enriching journeys.",
    content: `At Foxtcon, we celebrate the strength found in diversity. By embracing a wide range of backgrounds, ideas, and voices, we cultivate inclusive environments where creativity thrives and innovation flourishes. This commitment not only enriches our teams—it elevates every guest experience we create.`,
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
        <h2>
          Built by Hoteliers. Driven by Excellence
        </h2>
      </div>
      <div className="content-overlay">
        <div className="content-col ">
          <div className="image-layer-col">
            <img className="layer-one" src="/images/core-1.jpg" alt="img" />
            <div className="layer-two">
              <img src="/images/core-2.jpg" alt="img" />
            </div>
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
                    <span>
                      {tab.subTitle}
                    </span>
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
