import Footer from "@/components/user/Footer/Footer";
import Navbar from "@/components/user/Navbar/Navbar";
import React from "react";
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
