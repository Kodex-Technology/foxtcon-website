"use client";
import React from "react";
import { ClockIcon, PriceIcon } from "@/svgs";
import { useRouter } from "next/navigation";
import { WebsiteRoutes } from "@/constant/appRoutes";
interface Job {
  position: string;
  location: string;
  description: string;
  type: string;
  salary: string;
  slug: string;
}

interface JobPostCardProps {
  title: string;
  subtitle: string;
  jobs: Job[];
}

const JobPostCard: React.FC<JobPostCardProps> = ({ title, subtitle, jobs }) => {
  const router = useRouter();

  const handleViewClick = (slug: string) => {
    router.push(`${WebsiteRoutes.CAREER}/${slug}`);
  };
  return (
    <div className="job-post-card">
      <div className="content-col">
        <div className="job-post-title">
          <h1>
            {title}
            <span>{subtitle}</span>
          </h1>
        </div>
      </div>
      <div className="content-col">
        {jobs.map((job, idx) => (
          <div className="job-description-card" key={idx}>
            <div className="card-header">
              <h1>{job.position}</h1>
              <p>
                <img src="/images/flag.png" alt="img" />
                {job.location}
              </p>
            </div>
            <div className="card-body">
              <p>{job.description}</p>
            </div>
            <div className="card-footer">
              <div className="time-box">
                <p>
                  <ClockIcon />
                  {job.type}
                </p>
                <p>
                  <PriceIcon />
                  {job.salary}
                </p>
              </div>
              <div className="btn-wrapper">
                <button onClick={() => handleViewClick(job.slug)}>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostCard;
