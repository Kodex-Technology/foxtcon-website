// components/Organization/OrganizationTable.tsx
import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Organization } from "@/types/organization";
import { NoDataIcon, DotsIcon } from "@/svgs";

interface Props {
  data: Organization[];
  onMenuOpen: (event: React.MouseEvent<HTMLElement>, index: number) => void;
}

const OrganizationTable: React.FC<Props> = ({ data, onMenuOpen }) => {
  return (
    <Table responsive hover variant="white">
      <thead>
        <tr>
          <th>
            <div className="checkbox">
              <input type="checkbox" />
              Org Name
            </div>
          </th>
          <th>Org ID</th>
          <th>Admin</th>
          <th>User</th>
          <th>Location</th>
          <th>Reg Date</th>
          <th>Status</th>
          <th>Turn</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="checkbox">
                  <input type="checkbox" />
                  {row.name}
                </div>
              </td>
              <td>{row.id}</td>
              <td>{row.admin}</td>
              <td>{row.user}</td>
              <td>{row.location}</td>
              <td>{row.regDate}</td>
              <td>
                <div className="status">
                  <span className={row.status.toLowerCase()}>{row.status}</span>
                </div>
              </td>
              <td>
                <Form.Check type="switch" className="custom-switch" />
              </td>
              <td>
                <div className="action-btn">
                  <button onClick={(e) => onMenuOpen(e, index)}>
                    <DotsIcon />
                  </button>
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
  );
};

export default OrganizationTable;
