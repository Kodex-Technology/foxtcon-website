import React from "react";
import { AddIcon } from "@/svgs";

interface Props {
  filterStatus: string;
  onFilterChange: (status: string) => void;
  onAddClick?: () => void;
}

const OrganizationFilter: React.FC<Props> = ({
  filterStatus,
  onFilterChange,
  onAddClick,
}) => {
  return (
    <div className="table-header">
      <div className="common-title">
        <h2>Organization</h2>
      </div>
      <div className="table-btn">
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
        <button onClick={onAddClick}>
          <AddIcon />
          Add Organization
        </button>
      </div>
    </div>
  );
};

export default OrganizationFilter;
