import React from "react";
import "./JobPost.scss";
import MoreJobs from "@/components/common/MoreJobs/MoreJobs";
interface JobPostSectionProps {
  headingTitle?: string;
  headingHighlight: string;
  headingSubtitle: string;
  headingClass?: string;
}
const JobPostSection = ({
  headingTitle,
  headingHighlight,
  headingSubtitle,
  headingClass = "",
}: JobPostSectionProps) => {
  return (
    <div className="job-post-wrapper">
      <div className={`common-heading ${headingClass}`}>
        <h2>
          {headingTitle}{" "}
          <span>
            {headingHighlight}
            <img src="/iconFiles/underline-heading.svg" alt="icon" />
          </span>
        </h2>
        <p>{headingSubtitle}</p>
      </div>
      <MoreJobs />
    </div>
  );
};

export default JobPostSection;
