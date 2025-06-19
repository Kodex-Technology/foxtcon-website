import Navbar from "@/components/superadmin/common/Navbar/Navbar";
import React from "react";

const SuperAdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="super-admin-layout">
      <Navbar />
      <div className="super-admin-layout-content">{children}</div>
    </div>
  );
};

export default SuperAdminLayout;
