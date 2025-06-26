"use client";
import React, { useState } from "react";
import { DotsIcon, NoDataIcon, CloseIcon } from "@/svgs";
import "./page.scss";
import Table from "react-bootstrap/Table";
import { useParams } from "next/navigation";
import { employeeData } from "@/data/employeeData";
import PaginationControl from "@/components/superadmin/common/Pagination/PaginationControl";
import OrganizationFilter from "@/components/superadmin/Organization/OrganizationFilter/OrganizationFilter";
import ActionMenu from "@/components/superadmin/common/ActionMenu/ActionMenu";
import { organizationDetailActions } from "@/constant/organizationActions";
import ConfirmationModal from "@/components/superadmin/common/ConfirmationModal/ConfirmationModal";
import { Modal } from "react-bootstrap";

const OrganizationDetailPage = () => {
  const params = useParams();
  const organizationId = Number(params.id);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuAction = (action: string) => {
    if (["delete", "deactivate", "suspend"].includes(action)) {
      setSelectedAction(action);
      setShowConfirmationModal(true);
    }
  };

  const handleConfirmAction = () => {
    if (!selectedAction) return;

    console.log(
      `Confirmed ${selectedAction} for organization ID:`,
      organizationId
    );

    switch (selectedAction) {
      case "delete":
        console.log("Deleting organization:", organizationId);
        break;
      case "deactivate":
        console.log("Deactivating organization:", organizationId);
        break;
      case "suspend":
        console.log("Suspending organization:", organizationId);
        break;
      default:
        break;
    }

    setShowConfirmationModal(false);
  };

  //pagination
  const filteredData =
    filterStatus === "All"
      ? employeeData
      : employeeData.filter(
          (org) => org.employeeType.toLowerCase() === filterStatus.toLowerCase()
        );

  const totalEntries = filteredData.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className="container-fluid">
        <div className="organization-detail-page-wrapper">
          <div className="organization-detail-wrapper">
            <div className="header-section">
              <div className="common-title">
                <h2>Organization</h2>
              </div>
              <button onClick={handleMenuOpen}>
                <DotsIcon />
              </button>
            </div>
            <div className="body-section">
              <div className="organization-content">
                <img src="/images/organization.png" alt="img" />
                <h2>
                  Royal Hotel<span>Bridget.Weber40@gmail.com</span>
                </h2>
              </div>
              <div className="organization-status">
                <p>Active</p>
              </div>
            </div>
            <div className="footer-section">
              <div className="organization-summary-col">
                <h2>
                  <span>Owner</span>
                  <img src="/images/profile-1.jpg" alt="img" />
                </h2>
              </div>

              <div className="organization-summary-col">
                {" "}
                <h2>
                  <span>Location</span>
                  50001 Tyree Pine, Pearlborough 84454-2500
                </h2>
              </div>
              <div className="organization-summary-col">
                {" "}
                <h2>
                  <span>Phone Number</span>
                  (960) 796-6083
                </h2>
              </div>
              <div className="organization-summary-col">
                {" "}
                <h2>
                  <span>Admin</span>
                  05
                </h2>
              </div>
              <div className="organization-summary-col">
                <h2>
                  <span>Users</span>
                  50
                </h2>
              </div>
              <div className="organization-summary-col">
                <button onClick={() => setShowPlanModal(true)}>
                  View Plan
                </button>
              </div>
            </div>
            <ActionMenu
              anchorEl={anchorEl}
              menuRow={organizationId}
              onClose={() => {
                setAnchorEl(null);
              }}
              actions={organizationDetailActions}
              onAction={handleMenuAction}
            />
          </div>
          <div className="table-wrapper">
            <OrganizationFilter
              title="Organization Team"
              filterStatus={filterStatus}
              onFilterChange={(status) => {
                setFilterStatus(status);
                setCurrentPage(1);
              }}
              statusOptions={["All", "Admin", "User"]}
            />
            <div className="table-container">
              <Table responsive hover variant="white">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Employee Type</th>
                    <th>Role</th>
                    <th>Joining Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="profile">
                            <img src="/images/profile-1.jpg" alt="img" />
                            {item.name}
                          </div>
                        </td>
                        <td>{item.email}</td>
                        <td>
                          <span className="phone">{item.phone}</span>
                        </td>
                        <td>{item.employeeType}</td>
                        <td>{item.role}</td>
                        <td>
                          <span className="date">{item.joiningDate}</span>
                        </td>
                        <td>
                          <div className="status">
                            <span className={item.status.toLowerCase()}>
                              {item.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className="text-center">
                        <div className="no-data-available">
                          <NoDataIcon />
                          <p>No Data Available</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
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
      <Modal
        className="plan-detail-modal"
        show={showPlanModal}
        onHide={() => setShowPlanModal(false)}
        centered
      >
        <Modal.Body>
          <div className="custom-modal-header">
            <button onClick={() => setShowPlanModal(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="custom-modal-body">
            <p>Plan Detail</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrganizationDetailPage;
