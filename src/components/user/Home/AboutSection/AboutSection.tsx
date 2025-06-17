import React from "react";
import "./About.scss";

const AboutSection = () => {
  return (
    <div className="about-wrapper">
      <div className="content-overlay">
        <div className="about-col">
          <div className="content-col">
            <div className="common-heading">
              <p>Our Culture. Your Future.</p>
              <h2>
                What {" "}
                <span>
                  Inspires
                  <img
                    src="/iconFiles/underline-heading.svg"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </span>{" "}
                You?
                <br />
                Let’s Build It Together
              </h2>
            </div>
            <div className="description">
              <p>
                At Foxtcon Hospitality, your career is more than a job—it’s a journey
                filled with purpose, growth, and possibility.
                Whether you're joining us at the corporate level, on property,
                or through an internship, you’ll thrive in dynamic environments that spark curiosity,
                foster collaboration, and celebrate connection.
              </p>
              <p>
                We’re passionate about people—and that starts with you.
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
