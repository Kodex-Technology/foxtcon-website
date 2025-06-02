import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      <Image src={image} alt={title} width={100} height={100} />
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
