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
            </h2>
            <p>
              Community service is part of our corporate culture and who we are.
              Whether supporting schools and families or protecting our
              environment, we care about where we live, work and play.
            </p>
          </div>
          <div className="content-card">
            <h2>
              <ArrorTurnIcon />
              Foxtcon Values Its People
            </h2>
            <p>
              We encourage their energy, passion and abilities to make our
              hotels run in a remarkable way. When that happens, our guests
              experience The Crescent Care, an industry leading ideal. Our
              guests benefit from what each associate does as a part of this
              vision.<Link href="#">Read More</Link>
            </p>
          </div>
          <div className="content-card">
            <h2>
              <ArrorTurnIcon />
              Foxtcon Embraces Diversity
            </h2>
            <p>
              At Crescent, our differences are what make us great. That&apos;s
              why we are dedicated to creating an environment that encourages
              open conversations about diversity, race, equity and inclusion. We
              stand out because we believe in our people. Through education,
              recruiting and promoting diverse talent, we can strengthen our
              culture and community.
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
