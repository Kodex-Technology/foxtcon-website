"use client";
import React from "react";
import { NavigateIcon, BuildingStructureIcon, UserStructureIcon } from "@/svgs";
const cards = [
  {
    title: "Total Organization",
    count: 500,
    icon: <BuildingStructureIcon />,
  },
  {
    title: "Active Organization",
    count: 450,
    icon: <BuildingStructureIcon />,
  },
  {
    title: "Total User",
    count: 1000,
    icon: <UserStructureIcon />,
  },
  {
    title: "Total Admin",
    count: 300,
    icon: <UserStructureIcon />,
  },
];
const StatsCard = () => {
  return (
    <div className="stats-card-wrapper">
      <div className="row h-100">
        {cards.map((card, index) => {
          const colClass = `col-lg-6 ${index < 2 ? "mb-3" : ""}`;
          return (
            <div className={colClass} key={index}>
              <div className="stats-card">
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <button>
                    <NavigateIcon />
                  </button>
                </div>
                <div className="card-body">
                  {card.icon}
                  <h2 className="ellipsis-text" title={String(card.count)}>
                    {card.count}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
