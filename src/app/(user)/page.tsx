"use client";
import HeroSection from "@/components/user/Home/HeroSection/HeroSection";
import React from "react";
import PortfolioSection from "@/components/common/PortfolioSection/PortfolioSection";
import ManagementSection from "@/components/user/Home/ManagementSection/ManagementSection";
import BrandSection from "@/components/user/Home/BrandSection/BrandSection";
import PressReleaseSection from "@/components/common/PressReleaseSection/PressReleaseSection";
import LifeStyleSection from "@/components/user/Home/LifeStyleSection/LifeStyleSection";
import AboutSection from "@/components/user/Home/AboutSection/AboutSection";
import MapSection from "@/components/common/MapSection/MapSection";

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <HeroSection />
      <div className="container">
        <ManagementSection />
        <PortfolioSection />
        <BrandSection />
        <PressReleaseSection />
        <LifeStyleSection />
      </div>
      <AboutSection />
      <div className="container">
        <MapSection />
      </div>
    </div>
  );
};

export default HomePage;
