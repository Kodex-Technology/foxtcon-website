import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { useRouter } from "next/navigation";
import { WebsiteRoutes } from "@/constant/appRoutes";
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
interface PortfolioProps {
  showHeading?: boolean;
}

const PortfolioSection = ({ showHeading }: PortfolioProps) => {
  const router = useRouter();
  const goToPage = () => {
    router.push(WebsiteRoutes.PORTFOLIO);
  };
  return (
    <div className="portfolio-wrapper">
      {!showHeading && (
        <div className="common-heading">
          <h2>
            <span>
              Portfolio
              <img src="/iconFiles/underline-heading.svg" alt="icon" />
            </span>
          </h2>
        </div>
      )}

      <div className="row mt-5">
        {portfolioData.map((item, idx) => (
          <div className="col-md-6 col-lg-4 mb-3" key={idx}>
            <PortfolioCard
              image={item.image}
              title={item.title}
              location={item.location}
            />
          </div>
        ))}
      </div>
      {!showHeading && (
        <div className="btn-wrapper">
          <button onClick={goToPage}>See More</button>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;
