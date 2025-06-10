import HeroSection from "@/components/user/CareerDetail/HeroSection/HeroSection";
import React from "react";
import "./page.scss";
import {
  ArrowRightIconTwo,
  ArrowGridTurnIcon,
  CalendarGridTurnIcon,
  CalendarGridTurnIconTwo,
  LocationGridTurnIcon,
  TimeGridTurnIcon,
  PriceGridTurnIcon,
} from "@/svgs";

const JobDetailPage = () => {
  return (
    <div className="career-detail-page-wrapper">
      <HeroSection />
      <div className="container">
        <div className="job-detail-wrapper">
          <div className="common-heading">
            <h2>
              Apply For
              <span>
                Project Manager
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>{" "}
            </h2>
            <p>
              We’re on the lookout for a mid-level Project Manager to join our
              dynamic team. This role offers an exciting opportunity to lead
              impactful projects, collaborate with talented professionals, and
              contribute to shaping the future of our company.
            </p>
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
                      planning, risk assessment, and timeline management.{" "}
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Manage every aspect of hotel projects from initiation to
                      completion, including resource allocation, budget
                      planning, risk assessment, and timeline management.{" "}
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Manage every aspect of hotel projects from initiation to
                      completion, including resource allocation, budget
                      planning, risk assessment, and timeline management.{" "}
                    </li>
                  </ul>
                </div>
                <div className="job-description">
                  <h2>Requirement</h2>
                  <ul>
                    <li>
                      <ArrowRightIconTwo />
                      Manage every aspect of hotel projects from initiation to
                      completion, including resource allocation, budget
                      planning, risk assessment, and timeline management.{" "}
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Manage every aspect of hotel projects from initiation to
                      completion, including resource allocation, budget
                      planning, risk assessment, and timeline management.{" "}
                    </li>
                    <li>
                      <ArrowRightIconTwo />
                      Manage every aspect of hotel projects from initiation to
                      completion, including resource allocation, budget
                      planning, risk assessment, and timeline management.{" "}
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
                  <h2> Kansas City, USA</h2>
                </div>

                <div className="job-highlight">
                  <p>
                    <TimeGridTurnIcon />
                    Work shift
                  </p>
                  <h2>Full-time</h2>
                </div>
                <div className="job-highlight">
                  <p>
                    <PriceGridTurnIcon />
                    Salary
                  </p>
                  <h2>80k - 100k</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
