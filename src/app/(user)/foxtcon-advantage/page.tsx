"use client";
import HeroSection from "@/components/user/FoxtconAdvantage/HeroSection/HeroSection";
import React, { useState } from "react";
import "./page.scss";
import { ArrorTurnIcon } from "@/svgs";
import Link from "next/link";
import { InfoIcon } from "@/svgs";
import CoreValueSection from "@/components/user/FoxtconAdvantage/CoreValueSection/CoreValueSection";
const teamData = [
  {
    name: "Kellie Rolfson",
    title: "Principal Interactions Engineer",
    image: "/images/profile-1.jpg",
    category: "Senior Leadership",
  },
  {
    name: "Ava Smith",
    title: "VP of Operations",
    image: "/images/profile-2.jpg",
    category: "Operation",
  },
  {
    name: "Noah Johnson",
    title: "Business Development Manager",
    image: "/images/profile-3.jpg",
    category: "Business Development",
  },
  {
    name: "Liam Martinez",
    title: "Finance Analyst",
    image: "/images/profile-1.jpg",
    category: "Finance",
  },
  {
    name: "Emma Davis",
    title: "People & Culture Lead",
    image: "/images/profile-2.jpg",
    category: "People & Culture",
  },
  {
    name: "Olivia Wilson",
    title: "Senior Leadership Advisor",
    image: "/images/profile-3.jpg",
    category: "Senior Leadership",
  },
  {
    name: "James Anderson",
    title: "Operations Coordinator",
    image: "/images/profile-1.jpg",
    category: "Operation",
  },
  {
    name: "Sophia Taylor",
    title: "Business Analyst",
    image: "/images/profile-2.jpg",
    category: "Business Development",
  },
  {
    name: "William Brown",
    title: "Finance Manager",
    image: "/images/profile-3.jpg",
    category: "Finance",
  },
  {
    name: "Mia Clark",
    title: "Culture Program Manager",
    image: "/images/profile-1.jpg",
    category: "People & Culture",
  },
  {
    name: "Benjamin Lewis",
    title: "Chief Operating Officer",
    image: "/images/profile-2.jpg",
    category: "Senior Leadership",
  },
  {
    name: "Charlotte Hall",
    title: "Operations Specialist",
    image: "/images/profile-3.jpg",
    category: "Operation",
  },
  {
    name: "Daniel Allen",
    title: "Strategic Partnerships Lead",
    image: "/images/profile-1.jpg",
    category: "Business Development",
  },
  {
    name: "Amelia Wright",
    title: "Financial Controller",
    image: "/images/profile-2.jpg",
    category: "Finance",
  },
  {
    name: "Elijah Scott",
    title: "Diversity & Inclusion Manager",
    image: "/images/profile-3.jpg",
    category: "People & Culture",
  },
];

const FoxtconAdvantagePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Team");
  const [showMore, setShowMore] = useState(false);

  const categories = [
    "All Team",
    "Senior Leadership",
    "Operation",
    "Business Development",
    "Finance",
    "People & Culture",
  ];

  const filteredTeam =
    selectedCategory === "All Team"
      ? teamData
      : teamData.filter((member) => member.category === selectedCategory);
  const visibleTeam = showMore ? filteredTeam : filteredTeam.slice(0, 9);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="foxtcon-advantage-page-wrapper">
      <HeroSection />
      <div className="container">
        <CoreValueSection />
      </div>
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
                Community service is part of our corporate culture and who we
                are. Whether supporting schools and families or protecting our
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
                At Crescent, our differences are what make us great. That's why
                we are dedicated to creating an environment that encourages open
                conversations about diversity, race, equity and inclusion. We
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
      <div className="container">
        <div className="team-wrapper">
          <div className="common-heading">
            <h2>
              Meet{" "}
              <span>
                Our Team
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>
            </h2>
          </div>
          <div className="tabs-btn">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <div className="row mt-4">
              {visibleTeam.map((member, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="team-card">
                    <img src={member.image} alt="img" />
                    <div className="content-overlay">
                      <InfoIcon />
                      <div className="content-box">
                        <h1>{member.name}</h1>
                        <p>{member.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-wrapper">
            {filteredTeam.length > 3 && (
              <div className="text-center mt-3">
                <button className="see-more-btn" onClick={handleShowMore}>
                  {showMore ? "Show Less" : "See More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoxtconAdvantagePage;
