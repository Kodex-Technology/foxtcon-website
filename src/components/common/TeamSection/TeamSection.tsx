import React, { useState } from "react";
import "./Team.scss";
import TeamCard from "../TeamCard/TeamCard";
const teamData = [
  {
    name: "Kellie Rolfson",
    title: "Principal Interactions Engineer ",
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
    image: "/images/profile-4.jpg",
    category: "Finance",
  },
  {
    name: "Emma Davis",
    title: "People & Culture Lead",
    image: "/images/profile-5.jpg",
    category: "People & Culture",
  },
  {
    name: "Olivia Wilson",
    title: "Senior Leadership Advisor",
    image: "/images/profile-6.jpg",
    category: "Senior Leadership",
  },
  {
    name: "James Anderson",
    title: "Operations Coordinator",
    image: "/images/profile-7.jpg",
    category: "Operation",
  },
  {
    name: "Sophia Taylor",
    title: "Business Analyst",
    image: "/images/profile-8.jpg",
    category: "Business Development",
  },
  {
    name: "William Brown",
    title: "Finance Manager",
    image: "/images/profile-9.jpg",
    category: "Finance",
  },
  {
    name: "Mia Clark",
    title: "Culture Program Manager",
    image: "/images/profile-4.jpg",
    category: "People & Culture",
  },
  {
    name: "Benjamin Lewis",
    title: "Chief Operating Officer",
    image: "/images/profile-1.jpg",
    category: "Senior Leadership",
  },
  {
    name: "Charlotte Hall",
    title: "Operations Specialist",
    image: "/images/profile-2.jpg",
    category: "Operation",
  },
  {
    name: "Daniel Allen",
    title: "Strategic Partnerships Lead",
    image: "/images/profile-3.jpg",
    category: "Business Development",
  },
  {
    name: "Amelia Wright",
    title: "Financial Controller",
    image: "/images/profile-4.jpg",
    category: "Finance",
  },
  {
    name: "Elijah Scott",
    title: "Diversity & Inclusion Manager",
    image: "/images/profile-5.jpg",
    category: "People & Culture",
  },
];
const TeamSection = () => {
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
              <TeamCard member={member} showIcon={true} />
            </div>
          ))}
        </div>
      </div>
      <div className="btn-wrapper">
        {filteredTeam.length > 9 && (
          <div className="text-center mt-3">
            <button className="see-more-btn" onClick={handleShowMore}>
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
