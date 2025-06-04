import React from "react";
import { InfoIcon } from "@/svgs";
import "./TeamCard.scss";
interface TeamMember {
  image?: string;
  name?: string;
  title?: string;
  desc?: string;
}

interface TeamCardProps {
  member: TeamMember;
  showIcon?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, showIcon }) => {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.title} />
      <div className="content-overlay">
        {showIcon && <InfoIcon />}
        <div className="content-box">
          <h1>{member.title}</h1>
          <p>{member.desc ?? member.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
