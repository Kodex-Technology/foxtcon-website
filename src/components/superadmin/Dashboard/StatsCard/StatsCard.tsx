"use client";
import React from "react";
import { BuildingStructureIcon, UserStructureIcon } from "@/svgs";
import StatsCardItem from "../../common/StatsCardItem/StatsCardItem";
import { SuperAdminRoutes } from "@/constant/appRoutes";

const StatsCard = () => {
  return (
    <div className="stats-card-wrapper">
      <div className="row h-100">
        <div className="col-lg-6 mb-3">
          <StatsCardItem
            title="Total Organization"
            count={500}
            icon={<BuildingStructureIcon />}
            navigateTo={SuperAdminRoutes.ORGANIZATION}
          />
        </div>
        <div className="col-lg-6 mb-3">
          <StatsCardItem
            title="Active Organization"
            count={450}
            icon={<BuildingStructureIcon />}
            navigateTo={SuperAdminRoutes.ORGANIZATION}
          />
        </div>
        <div className="col-lg-6 mb-3 mb-lg-0">
          <StatsCardItem
            title="Total User"
            count={50}
            icon={<UserStructureIcon />}
            navigateTo={SuperAdminRoutes.ORGANIZATION_USER}
          />
        </div>
        <div className="col-lg-6 mb-3 mb-lg-0">
          <StatsCardItem
            title="Total Admin"
            count={300}
            icon={<UserStructureIcon />}
            navigateTo={SuperAdminRoutes.ORGANIZATION_ADMIN}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
