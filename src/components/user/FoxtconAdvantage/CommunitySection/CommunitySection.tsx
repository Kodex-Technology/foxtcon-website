import React from "react";
import "./Community.scss";
import { ArrorTurnIcon } from "@/svgs";
import Link from "next/link";
const CommunitySection = () => {
  return (
    <div className="community-wrapper">
      <div className="content-overlay">
        <div className="content-col">
          <div className="common-heading">
            <h2>
              Foxtcon{" "}
              <span>
                Community
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>
              <br />
              Serving with Purpose
            </h2>
            <p>
              At Foxtcon Hospitality, community is more than a commitment—it’s
              part of who we are. From supporting local schools and families to
              championing environmental stewardship, we take pride in giving back to
              the places where we live, work, and grow. Our culture of service extends
              beyond our properties and into the heart of every community we touch.
            </p>
          </div>
          <div className="content-card">
            <h2>
              <ArrorTurnIcon />
              Empowering People, Elevating Hospitality
            </h2>
            <p>
              We believe our people are our greatest strength. Their passion, energy,
              and dedication are what make our hotels exceptional. By nurturing talent
              and encouraging innovation, we create environments where both our associates
              and our guests thrive. This is the essence of the Foxtcon experience—hospitality
              led by heart, powered by purpose...
              <Link href="#">Read More</Link>
            </p>
          </div>
          <div className="content-card">
            <h2>
              <ArrorTurnIcon />
              Celebrating Diversity, Strengthening Culture
            </h2>
            <p>
              We believe our people are our greatest strength. Their passion, energy, and dedication
              are what make our hotels exceptional. By nurturing talent and encouraging innovation,
              we create environments where both our associates and our guests thrive. This is the
              essence of the Foxtcon experience—hospitality led by heart, powered by purpose...
              <Link href="#">Read More</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="community-right">
        <img src="/images/community-right.jpg" alt="" />
      </div>
    </div>
  );
};

export default CommunitySection;
