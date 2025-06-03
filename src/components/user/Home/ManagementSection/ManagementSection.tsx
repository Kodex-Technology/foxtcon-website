import React from "react";
import Link from "next/link";
import { RoomIcon, DiningIcon, SpaceIcon, ResturantIcon } from "@/svgs";
import "./Management.scss";
const ManagementSection = () => {
  return (
    <div className="management-wrapper">
      <div className="management-col">
        <div className="common-heading">
          <h2>
            Innovative Hotel Management Company With a{" "}
            <span>
              Bold Spirit{" "}
              <img
                src="/iconFiles/underline-heading.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </span>
          </h2>
        </div>
        <div className="description">
          <p>
            Rooted in entrepreneurial spirit and driven by measurable results,
            we deliver innovative solutions and tailored strategies that elevate
            hotels, resorts, restaurants, and hospitality ventures to new
            heights. At Foxtcon, we empower our partners to unlock untapped
            markets, craft unforgettable guest experiences, and accelerate
            revenue and asset growth.With operational precision and bold
            innovation, Foxtcon Hospitality turns hospitality challenges into
            competitive advantages.
            <Link href="#">Read More</Link>
          </p>
        </div>
        <div className="btn-wrapper">
          <button>Discover the Advantage</button>
        </div>
      </div>
      <div className="management-col">
        <div className="center-img">
          <img src="/images/hotel-img-1.svg" alt="icon" />
        </div>
      </div>
      <div className="management-col">
        <div className="hotel-content">
          <div className="content-row">
            <RoomIcon />
            <h2>
              25,000+<span>Rooms under management</span>
            </h2>
          </div>
          <div className="content-row">
            <DiningIcon />
            <h2>
              120+<span>Properties under management</span>
            </h2>
          </div>
          <div className="content-row">
            <SpaceIcon />
            <h2>
              1,000,000+<span>Square feet of meeting space</span>
            </h2>
          </div>
          <div className="content-row">
            <ResturantIcon />
            <h2>
              300+<span>Restaurants, bars & outlets</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSection;
