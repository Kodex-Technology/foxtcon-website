"use client";
import React, { useState } from "react";
import "./page.scss";
import { organizationData } from "@/data/organizationData";
import PaginationControl from "@/components/superadmin/common/Pagination/PaginationControl";
import ActionMenu from "@/components/superadmin/common/ActionMenu/ActionMenu";
import { organizationActions } from "@/constant/organizationActions";
import StatsCard from "@/components/superadmin/Organization/StatsCard/StatsCard";
import ConfirmationModal from "@/components/superadmin/common/ConfirmationModal/ConfirmationModal";
import OrganizationFilter from "@/components/superadmin/Organization/OrganizationFilter/OrganizationFilter";
import OrganizationTable from "@/components/superadmin/Organization/OrganizationTable/OrganizationTable";
import { useRouter } from "next/navigation";
import { SuperAdminRoutes } from "@/constant/appRoutes";
const OrganizationPage = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuRow, setMenuRow] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    rowIndex: number,
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(rowIndex);
  };
  const handleMenuAction = (action: string, rowIndex: number) => {
    const row = organizationData[rowIndex];
    console.log("Action:", action);
    console.log("ID:", row.id);
    if (action === "view") {
      router.push(`${SuperAdminRoutes.ORGANIZATION}/${row.id}`);
    } else if (["delete", "deactivate", "suspend"].includes(action)) {
      setSelectedAction(action);
      setSelectedRowIndex(rowIndex);
      setShowConfirmationModal(true);
    }
  };

  //pagination
  const filteredData =
    filterStatus === "All"
      ? organizationData
      : organizationData.filter(
          (org) => org.status.toLowerCase() === filterStatus.toLowerCase(),
        );

  const totalEntries = filteredData.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  //handleconfirmation
  const handleConfirmAction = () => {
    if (selectedRowIndex !== null && selectedAction) {
      const row = organizationData[selectedRowIndex];
      console.log(`Confirmed ${selectedAction} for ID:`, row.id);
      switch (selectedAction) {
        case "delete":
          console.log("delete", row.id);
          break;
        case "deactivate":
          console.log("deactivate", row.id);
          break;
        case "suspend":
          console.log("suspend", row.id);
          break;
        default:
          break;
      }
    }
    setShowConfirmationModal(false);
  };
  const goToAddPage = () => {
    router.push(SuperAdminRoutes.ORGANIZATION_ADD);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="organization-page-wrapper">
          <StatsCard />
          <div className="table-wrapper">
            <OrganizationFilter
              title="Organization"
              filterStatus={filterStatus}
              onFilterChange={(status) => {
                setFilterStatus(status);
                setCurrentPage(1);
              }}
              onAddClick={goToAddPage}
              statusOptions={["All", "Active", "Inactive", "Suspended"]}
            />
            <div className="table-container">
              <OrganizationTable
                data={currentData}
                onMenuOpen={handleMenuOpen}
              />
              <ActionMenu
                anchorEl={anchorEl}
                menuRow={menuRow}
                onClose={() => {
                  setAnchorEl(null);
                  setMenuRow(null);
                }}
                actions={organizationActions}
                onAction={handleMenuAction}
              />
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
      <ConfirmationModal
        show={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={handleConfirmAction}
        actionType={selectedAction || "delete"}
      />
    </>
  );
};

export default OrganizationPage;
