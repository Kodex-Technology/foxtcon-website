"use client";
import React from "react";
import { UserStructureIcon } from "@/svgs";
import StatsCardItem from "@/components/superadmin/common/StatsCardItem/StatsCardItem";

const StatsCard = () => {
  return (
    <div className="row">
      <div className="col-lg-4 mb-3">
        <StatsCardItem
          title="Total Admin"
          count={500}
          icon={<UserStructureIcon />}
          className="organizationStats"
        />
      </div>
      <div className="col-lg-4 mb-3">
        <StatsCardItem
          title="Active Admin"
          count={450}
          icon={<UserStructureIcon />}
          className="organizationStats"
        />
      </div>
      <div className="col-lg-4 mb-3">
        <StatsCardItem
          title="Deactivate Admin"
          count={50}
          icon={<UserStructureIcon />}
          className="organizationStats"
        />
      </div>
    </div>
  );
};

export default StatsCard;
