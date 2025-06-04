"use client";
import HeroSection from "@/components/user/FoxtconAdvantage/HeroSection/HeroSection";
import React from "react";
import "./page.scss";
import CoreValueSection from "@/components/user/FoxtconAdvantage/CoreValueSection/CoreValueSection";
import PressReleaseSection from "@/components/common/PressReleaseSection/PressReleaseSection";
import MapSection from "@/components/common/MapSection/MapSection";
import CommunitySection from "@/components/user/FoxtconAdvantage/CommunitySection/CommunitySection";
import TeamSection from "@/components/common/TeamSection/TeamSection";
import AdvantageSection from "@/components/user/FoxtconAdvantage/AdvantageSection/AdvantageSection";
import DigitalPresenceSection from "@/components/user/FoxtconAdvantage/DigitalPresenceSection/DigitalPresenceSection";
import GlobalConnectionSection from "@/components/user/FoxtconAdvantage/GlobalConnectionSection/GlobalConnectionSection";

const FoxtconAdvantagePage = () => {
  return (
    <div className="foxtcon-advantage-page-wrapper">
      <HeroSection />
      <div className="container">
        <CoreValueSection />
      </div>
      <CommunitySection />
      <div className="container">
        <TeamSection />
      </div>
      <AdvantageSection />
      <div className="container">
        <DigitalPresenceSection />
        <GlobalConnectionSection />
        <PressReleaseSection />
        <MapSection />
      </div>
    </div>
  );
};

export default FoxtconAdvantagePage;
