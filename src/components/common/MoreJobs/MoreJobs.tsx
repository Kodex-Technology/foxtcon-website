import React from "react";
import JobPostCard from "../JobPostCard/JobPostCard";
const jobPostData = [
  {
    title: "Project Managers",
    subtitle: "Open positions in our managing team.",
    jobs: [
      {
        position: "Project Manager",
        location: "Kansas City, USA",
        description:
          "We’re looking for a mid-level project manager to join our team",
        type: "Full-Time",
        salary: "80k - 100k",
        slug: "project-manager",
      },
      {
        position: "Senior Project Manager",
        location: "Kansas City, USA",
        description: "Lead projects and mentor junior team members",
        type: "Full-Time",
        salary: "100k - 120k",
        slug: "senior-project-manager",
      },
    ],
  },
  {
    title: "Project Managers",
    subtitle: "Open positions in our managing team.",
    jobs: [
      {
        position: "Project Manager",
        location: "Kansas City, USA",
        description:
          "We’re looking for a mid-level project manager to join our team",
        type: "Full-Time",
        salary: "80k - 100k",
        slug: "project-manager-2",
      },
      {
        position: "Senior Project Manager",
        location: "Kansas City, USA",
        description: "Lead projects and mentor junior team members",
        type: "Full-Time",
        salary: "100k - 120k",
        slug: "senior-project-manager-2",
      },
    ],
  },
];
const MoreJobs = () => {
  return (
    <div className="job-post-grid">
      {jobPostData.map((item, index) => (
        <JobPostCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          jobs={item.jobs}
        />
      ))}
    </div>
  );
};

export default MoreJobs;
