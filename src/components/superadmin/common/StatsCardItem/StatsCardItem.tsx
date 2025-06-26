"use client";
import React from "react";
import { NavigateIcon } from "@/svgs";
import "./StatsCardItem.scss";
import { useRouter } from "next/navigation";
type StatsCardItemProps = {
  title: string;
  count: number;
  icon: React.ReactNode;
  className?: string;
  navigateTo?: string;
};

const StatsCardItem: React.FC<StatsCardItemProps> = ({
  title,
  count,
  icon,
  className,
  navigateTo,
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };
  return (
    <div className={`stats-card ${className}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={handleNavigation}>
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
