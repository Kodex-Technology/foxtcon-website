import React from "react";
import "./page.scss";
import HeroSection from "@/components/user/Career/HeroSection/HeroSection";
import JobPostSection from "@/components/user/Career/JobPostSection/JobPostSection";
import SuccessStorieSection from "@/components/common/SuccessStorieSection/SuccessStorieSection";
import MapSection from "@/components/common/MapSection/MapSection";

const CareerPage = () => {
  return (
    <div className="career-page-wrapper">
      <HeroSection />
      <div className="container">
        <JobPostSection />
        <SuccessStorieSection />
        <MapSection />
      </div>
    </div>
  );
};

export default CareerPage;
