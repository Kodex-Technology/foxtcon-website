import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Image from "next/image";
import "./Portfolio.scss";
const portfolioData = [
  {
    image: "/images/hotel-img-2.svg",
    title: "Williamsburg Inn",
    location: "Williamsburg, VA",
  },
  {
    image: "/images/hotel-img-3.svg",
    title: "Sunset Resort",
    location: "Miami, FL",
  },
  {
    image: "/images/hotel-img-4.svg",
    title: "Mountain Escape",
    location: "Aspen, CO",
  },
  {
    image: "/images/hotel-img-2.svg",
    title: "Williamsburg Inn",
    location: "Williamsburg, VA",
  },
  {
    image: "/images/hotel-img-3.svg",
    title: "Sunset Resort",
    location: "Miami, FL",
  },
  {
    image: "/images/hotel-img-4.svg",
    title: "Mountain Escape",
    location: "Aspen, CO",
  },
  {
    image: "/images/hotel-img-2.svg",
    title: "Williamsburg Inn",
    location: "Williamsburg, VA",
  },
  {
    image: "/images/hotel-img-3.svg",
    title: "Sunset Resort",
    location: "Miami, FL",
  },
  {
    image: "/images/hotel-img-4.svg",
    title: "Mountain Escape",
    location: "Aspen, CO",
  },
];
const PortfolioSection = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="common-heading">
        <h2>
          <span>
            Portfolio
            <Image
              src="/iconFiles/underline-heading.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>
        </h2>
      </div>
      <div className="row mt-5">
        {portfolioData.map((item, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <PortfolioCard
              image={item.image}
              title={item.title}
              location={item.location}
            />
          </div>
        ))}
      </div>
      <div className="btn-wrapper">
        <button>See More</button>
      </div>
    </div>
  );
};

export default PortfolioSection;
