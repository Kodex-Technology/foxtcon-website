import React from "react";
import "./Hero.scss";
const HeroSection = () => {
  return (
    <div className="management-hero-wrapper">
       <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
        className="video-bg"
      >
        <source src="/videos/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>
          Performance is our language. <span>Hospitality is our craft</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
