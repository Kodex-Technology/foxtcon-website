import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="home-hero-wrapper">
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


          Foxtcon <span>Hospitality</span> <br /> Elevating Hotels,
          <span> Empowering </span> Growth.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
