import HeroSection from "@/components/user/Home/HeroSection/HeroSection";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RoomIcon, DiningIcon, SpaceIcon, ResturantIcon } from "@/svgs";
import PortfolioCard from "@/components/common/PortfolioCard/PortfolioCard";
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
const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <HeroSection />
      <div className="container">
        <div className="management-wrapper">
          <div className="management-col">
            <div className="common-heading">
              <h2>
                Innovative Hotel Management Company With a{" "}
                <span>
                  Bold Spirit{" "}
                  <Image
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
                Rooted in entrepreneurial spirit and driven by measurable
                results, we deliver innovative solutions and tailored strategies
                that elevate hotels, resorts, restaurants, and hospitality
                ventures to new heights. At Foxtcon, we empower our partners to
                unlock untapped markets, craft unforgettable guest experiences,
                and accelerate revenue and asset growth.With operational
                precision and bold innovation, Foxtcon Hospitality turns
                hospitality challenges into competitive advantages.
                <Link href="#">Read More</Link>
              </p>
            </div>
            <div className="btn-wrapper">
              <button>Discover the Advantage</button>
            </div>
          </div>
          <div className="management-col">
            <div className="center-img">
              <Image
                src="/images/hotel-img-1.svg"
                alt="icon"
                width={100}
                height={100}
              />
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
      </div>
    </div>
  );
};

export default HomePage;
