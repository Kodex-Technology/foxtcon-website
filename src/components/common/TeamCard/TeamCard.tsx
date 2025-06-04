import React from "react";
import { InfoIcon } from "@/svgs";
import "./TeamCard.scss";
interface TeamMember {
  image: string;
  name: string;
  title: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} />
      <div className="content-overlay">
        <InfoIcon />
        <div className="content-box">
          <h1>{member.name}</h1>
          <p>{member.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
