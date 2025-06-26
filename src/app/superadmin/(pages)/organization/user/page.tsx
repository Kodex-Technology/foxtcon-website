"use client";
import React, { useState } from "react";
import "./page.scss";
import { userData } from "@/data/userData";
import PaginationControl from "@/components/superadmin/common/Pagination/PaginationControl";
import OrganizationFilter from "@/components/superadmin/Organization/OrganizationFilter/OrganizationFilter";
import UserTable from "@/components/superadmin/Organization/User/UserTable/UserTable";
import StatsCard from "@/components/superadmin/Organization/User/StatsCard/StatsCard";
const UserPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState("All");
  //pagination
  const filteredData =
    filterStatus === "All"
      ? userData
      : userData.filter(
          (org) => org.status.toLowerCase() === filterStatus.toLowerCase(),
        );

  const totalEntries = filteredData.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className="container-fluid">
        <div className="user-page-wrapper">
          <StatsCard />
          <div className="table-wrapper">
            <OrganizationFilter
              title="User"
              filterStatus={filterStatus}
              onFilterChange={(status) => {
                setFilterStatus(status);
                setCurrentPage(1);
              }}
              statusOptions={["All", "Active", "Inactive", "Suspended"]}
            />
            <div className="table-container">
              <UserTable data={currentData} />

              <PaginationControl
                currentPage={currentPage}
                totalEntries={totalEntries}
                rowsPerPage={rowsPerPage}
                onPageChange={(page) => setCurrentPage(page)}
                onRowsPerPageChange={(rows) => {
                  setRowsPerPage(rows);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
