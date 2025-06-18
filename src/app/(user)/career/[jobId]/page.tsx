"use client";
import HeroSection from "@/components/user/Career/HeroSection/HeroSection";
import React from "react";
import "./page.scss";
import { useRouter, useParams } from "next/navigation";
import { WebsiteRoutes } from "@/constant/appRoutes";
import JobPostSection from "@/components/user/Career/JobPostSection/JobPostSection";
import JobDescriptionSection from "@/components/user/CareerDetail/JobDescriptionSection/JobDescriptionSection";

const JobDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.jobId;
  const handleApplyClick = () => {
    router.push(`${WebsiteRoutes.CAREER}/${slug}/apply`);
  };

  return (
    <div className="career-detail-page-wrapper">
      <HeroSection />
      <JobDescriptionSection
        position="Project Manager"
        description="We’re on the lookout for a mid-level Project Manager to join our dynamic team. This role offers an exciting opportunity to lead impactful projects, collaborate with talented professionals, and contribute to shaping the future of our company."
        location="Kansas City, USA"
        type="Full-time"
        salary="80k - 100k"
        onApply={handleApplyClick}
      />
      <JobPostSection
        headingHighlight="More jobs"
        headingSubtitle="Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
      />
    </div>
  );
};

export default JobDetailPage;
