import React from "react";
import { PaginationNext, PaginationPrev } from "@/svgs";
import "./PaginationControl.scss";

interface PaginationControlProps {
  currentPage: number;
  totalEntries: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  currentPage,
  totalEntries,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, totalEntries);

  return (
    <div className="pagination-wrapper">
      <div className="pagination-control">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PaginationPrev />
        </button>
        <p>{currentPage}</p>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PaginationNext />
        </button>
      </div>
      <div className="pagination-content">
        <p>
          Show{" "}
          <span>
            {startIndex} - {endIndex}
          </span>{" "}
          of {totalEntries} entries
        </p>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        >
          <option value="10">Show 10</option>
          <option value="50">Show 50</option>
          <option value="100">Show 100</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationControl;
