"use client";
import React from "react";
import { BuildingStructureIcon, PriceStructureIcon } from "@/svgs";
import StatsCardItem from "../../common/StatsCardItem/StatsCardItem";

const StatsCard = () => {
  return (
    <div className="row">
      <div className="col-lg-3 mb-3">
        <StatsCardItem
          title="Total Organization"
          count={500}
          icon={<BuildingStructureIcon />}
          className="organizationStats"
        />
      </div>
      <div className="col-lg-3 mb-3">
        <StatsCardItem
          title="Active Organization"
          count={450}
          icon={<BuildingStructureIcon />}
          className="organizationStats"
        />
      </div>
      <div className="col-lg-3 mb-3">
        <StatsCardItem
          title="Deactivate Organization"
          count={50}
          icon={<BuildingStructureIcon />}
          className="organizationStats"
        />
      </div>
      <div className="col-lg-3 mb-3">
        <StatsCardItem
          title="Paid Organization"
          count={300}
          icon={<PriceStructureIcon />}
          className="organizationStats"
        />
      </div>
    </div>
  );
};

export default StatsCard;
