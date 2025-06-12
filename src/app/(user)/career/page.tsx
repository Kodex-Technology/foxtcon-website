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
        <JobPostSection
          headingTitle="Start doing work that"
          headingHighlight="matters"
          headingSubtitle="Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
        />
        <SuccessStorieSection />
        <MapSection />
      </div>
    </div>
  );
};

export default CareerPage;
