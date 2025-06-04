"use client";
import MapSection from "@/components/common/MapSection/MapSection";
import PortfolioSection from "@/components/common/PortfolioSection/PortfolioSection";
import SuccessStorieSection from "@/components/common/SuccessStorieSection/SuccessStorieSection";
import TeamSection from "@/components/common/TeamSection/TeamSection";
import HeroSection from "@/components/user/Portfolio/HeroSection/HeroSection";
import React from "react";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page-wrapper">
      <HeroSection />
      <div className="container">
        <PortfolioSection showHeading={true} />
        <TeamSection />
        <SuccessStorieSection />
        <MapSection />
      </div>
    </div>
  );
};

export default PortfolioPage;
