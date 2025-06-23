import React from "react";
import { AddIcon } from "@/svgs";

interface Props {
  title: string;
  filterStatus: string;
  onFilterChange: (status: string) => void;
  onAddClick?: () => void;
  statusOptions: string[];
}

const OrganizationFilter: React.FC<Props> = ({
  title,
  filterStatus,
  onFilterChange,
  onAddClick,
  statusOptions,
}) => {
  return (
    <div className="table-header">
      <div className="common-title">
        <h2>{title}</h2>
      </div>
      <div className="table-btn">
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        {onAddClick && (
          <button onClick={onAddClick}>
            <AddIcon />
            Add Organization
          </button>
        )}
      </div>
    </div>
  );
};

export default OrganizationFilter;
