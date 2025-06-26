// components/Organization/OrganizationTable.tsx
import React from "react";
import Table from "react-bootstrap/Table";
import { User } from "@/types/user";
import { NoDataIcon } from "@/svgs";

interface Props {
  data: User[];
}

const UserTable: React.FC<Props> = ({ data }) => {
  return (
    <Table responsive hover variant="white">
      <thead>
        <tr>
          <th>
            <div className="checkbox">Name</div>
          </th>
          <th>Email</th>
          <th>Phone</th>
          <th>Organization</th>
          <th>Role</th>
          <th>Joining Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="profile">
                  <img src="/images/profile-1.jpg" alt="img" />
                  {row.name}
                </div>
              </td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.organization}</td>
              <td>{row.role}</td>
              <td>{row.joiningDate}</td>
              <td>
                <div className="status">
                  <span className={row.status.toLowerCase()}>{row.status}</span>
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

export default UserTable;
