import React from "react";
import Link from "next/link";
import "./PortfolioCard.scss";
interface PortfolioCardProps {
  image: string;
  title: string;
  location: string;
  linkText?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  location,
  linkText = "Visit Website",
}) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} />
      <div className="content-overlay">
        <div className="content-header">
          <h3>{title}</h3>
        </div>
        <div className="content-footer">
          <p>{location}</p>
          <Link href="#">{linkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
