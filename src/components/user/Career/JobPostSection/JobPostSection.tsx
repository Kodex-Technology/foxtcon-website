import React from "react";
import MoreJobs from "@/components/common/MoreJobs/MoreJobs";
const JobPostSection = () => {
  return (
    <div className="job-post-wrapper">
      <div className="common-heading">
        <h2>
          Start doing work that{" "}
          <span>
            matters
            <img src="/iconFiles/underline-heading.svg" alt="icon" />
          </span>
        </h2>
        <p>
          Our philosophy is simple - hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
      </div>
      <MoreJobs />
    </div>
  );
};

export default JobPostSection;
