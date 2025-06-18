"use client";
import React from "react";
import "./page.scss";
import HeroSection from "@/components/user/ManagementService/HeroSection/HeroSection";
import OverviewSection from "@/components/user/ManagementService/OverviewSection/OverviewSection";
import BusinessDevelopmentSection from "@/components/user/ManagementService/BusinessDevelopmentSection/BusinessDevelopmentSection";
import OperationSection from "@/components/user/ManagementService/OperationSection/OperationSection";
import RevenueGenerationSection from "@/components/user/ManagementService/RevenueGenerationSection/RevenueGenerationSection";
import ConceptDevelopmentSection from "@/components/user/ManagementService/ConceptDevelopmentSection/ConceptDevelopmentSection";
import SuccessStorieSection from "@/components/common/SuccessStorieSection/SuccessStorieSection";
import MapSection from "@/components/common/MapSection/MapSection";

const ManagementServicePage = () => {
  return (
    <div className="management-service-page-wrapper">
      <HeroSection />
      <OverviewSection />
      <BusinessDevelopmentSection />
      <OperationSection />
      <RevenueGenerationSection />
      <ConceptDevelopmentSection />
      <div className="container">
        <SuccessStorieSection />
      </div>
      <MapSection />
    </div>
  );
};

export default ManagementServicePage;
