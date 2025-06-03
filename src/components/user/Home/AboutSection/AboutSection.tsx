import React from "react";
import "./About.scss";

const AboutSection = () => {
  return (
    <div className="about-wrapper">
      <div className="content-overlay">
        <div className="about-col">
          <div className="content-col">
            <div className="common-heading">
              <p>Our Culture, Your Career</p>
              <h2>
                What Are You{" "}
                <span>
                  Passionate
                  <img
                    src="/iconFiles/underline-heading.svg"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </span>{" "}
                About?
              </h2>
            </div>
            <div className="description">
              <p>
                Your career journey with Crescent has endless possibilities. We
                offer exciting positions, from corporate to hotel associates to
                internships. Work in dynamic environments that foster curiosity,
                collaboration and connectio
              </p>
            </div>
            <div className="btn-wrapper">
              <button>Join Our Team</button>
            </div>
          </div>
        </div>
        <div className="about-col img-col">
          <img src="/images/banner-rectangle.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
