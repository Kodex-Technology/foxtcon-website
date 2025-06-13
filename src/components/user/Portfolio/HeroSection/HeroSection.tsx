import React from "react";
import "./Hero.scss";
const HeroSection = () => {
  return (
    <div className="portfolio-hero-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
        className="video-bg"
      >
        <source src="/videos/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>
          We don&apos;t just manage properties. <span>We build legacies.</span>
        </h1>
        <div className="filter-container">
          <select name="brand" className="filter-select">
            <option value="">Select Brand</option>
            <option value="marriott">Marriott</option>
            <option value="hilton">Hilton</option>
            <option value="crescent">Crescent</option>
          </select>

          <select name="selection" className="filter-select">
            <option value="">Select Type</option>
            <option value="luxury">Luxury</option>
            <option value="budget">Budget</option>
            <option value="business">Business</option>
          </select>

          <select name="location" className="filter-select">
            <option value="">Starts with Location</option>
            <option value="new">New York</option>
            <option value="los">Los Angeles</option>
            <option value="chi">Chicago</option>
          </select>
          <div className="btn-wrapper">
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
