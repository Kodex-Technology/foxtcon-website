"use client";
import React from "react";
import {
  ArrowRightIconTwo,
  ArrowGridTurnIcon,
  CalendarGridTurnIcon,
  CalendarGridTurnIconTwo,
  LocationGridTurnIcon,
  TimeGridTurnIcon,
  PriceGridTurnIcon,
} from "@/svgs";
import "./JobDescription.scss";

const JobDescriptionSection = ({
  position,
  description,
  location,
  type,
  salary,
  onApply,
}: {
  position: string;
  description: string;
  location: string;
  type: string;
  salary: string;
  onApply: () => void;
}) => {
  return (
    <div className="container-fluid px-0 job-detail-fluid">
      <div className="container">
        <div className="job-detail-wrapper">
          <div className="common-heading">
            <h2>
              Apply For{" "}
              <span>
                {position}
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>
            </h2>
            <p>{description}</p>
          </div>
          <div className="job-detail-container">
            <div className="content-col">
              <div className="job-description-col">
                <div className="job-description">
                  <h2>Job Description</h2>
                  <ul>
                    <li>
                      <ArrowRightIconTwo />
                      Manage every aspect of hotel projects from initiation to
                      completion, including resource allocation, budget
                      planning, risk assessment, and timeline management.
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Collaborate with cross-functional teams for smooth project
                      execution.
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Ensure quality standards and compliance at every project
                      stage.
                    </li>
                  </ul>
                </div>
                <div className="job-description">
                  <h2>Requirement</h2>
                  <ul>
                    <li>
                      <ArrowRightIconTwo />
                      Bachelor’s degree in a related field.
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      3+ years of project management experience.
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Excellent communication and leadership skills.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-col">
              <div className="job-highlight-col">
                <div className="job-highlight">
                  <p>
                    <ArrowGridTurnIcon />
                    Number of positions
                  </p>
                  <h2>01</h2>
                </div>
                <div className="job-highlight">
                  <p>
                    <CalendarGridTurnIcon />
                    Job posted date:
                  </p>
                  <h2>
                    <span>17-02-2025</span>
                  </h2>
                </div>
                <div className="job-highlight">
                  <p>
                    <CalendarGridTurnIconTwo />
                    Last applied date:
                  </p>
                  <h2>
                    <span>23-07-2025</span>
                  </h2>
                </div>
                <div className="job-highlight">
                  <p>
                    <LocationGridTurnIcon />
                    Location
                  </p>
                  <h2>{location}</h2>
                </div>
                <div className="job-highlight">
                  <p>
                    <TimeGridTurnIcon />
                    Work shift
                  </p>
                  <h2>{type}</h2>
                </div>
                <div className="job-highlight">
                  <p>
                    <PriceGridTurnIcon />
                    Salary
                  </p>
                  <h2>{salary}</h2>
                </div>
                <div className="btn-wrapper">
                  <button onClick={onApply}>Continue for apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionSection;
