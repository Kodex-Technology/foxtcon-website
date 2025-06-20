"use client";
import React from "react";
import { NavigateIcon } from "@/svgs";
import "./StatsCardItem.scss";
type StatsCardItemProps = {
  title: string;
  count: number;
  icon: React.ReactNode;
  className?: string;
};

const StatsCardItem: React.FC<StatsCardItemProps> = ({
  title,
  count,
  icon,
  className,
}) => {
  return (
    <div className={`stats-card ${className}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button>
          <NavigateIcon />
        </button>
      </div>
      <div className="card-body">
        {icon}
        <h2 className="ellipsis-text" title={String(count)}>
          {count}
        </h2>
      </div>
    </div>
  );
};

export default StatsCardItem;
