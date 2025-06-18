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
    <div className="container-fluid px-0 job-post-fluid">
      <div className="container">
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
      </div>
    </div>
  );
};

export default JobPostSection;
