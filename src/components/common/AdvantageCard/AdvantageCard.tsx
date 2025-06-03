import React from "react";
import "./AdvantageCard.scss";
interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="advantage-card">
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AdvantageCard;
