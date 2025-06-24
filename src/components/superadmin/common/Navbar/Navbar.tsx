"use client";
import React, { useRef, useState } from "react";
import "./Navbar.scss";
import {
  ChatIcon,
  NotificationIcon,
  ChevronDownIcon,
  LogoutIcon,
  HamburgerIcon,
} from "@/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constant/menuItem";
import Breadcrumbs from "../Breadcums/Breadcrumbs";
import { useRouter } from "next/navigation";
import { SuperAdminRoutes } from "@/constant/appRoutes";
const Navbar = () => {
  const pathname = usePathname();
  const route = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const handleLogout = () => {
    route.push(SuperAdminRoutes.SIGNIN);
  };
  const handleNavbarToggle = () => {
    setOpenSidebar(!openSidebar);
  };
  const goToChatPage = () => {
    route.push(SuperAdminRoutes.CHAT);
  };
  return (
    <>
      <div className="superadmin-topbar">
        <div className="logo-wrapper">
          <img src="/iconFiles/foxtcon-color-logo.svg" alt="logo" />
        </div>
        <div className="content-wrapper">
          <Breadcrumbs />
          <div className="header-actions">
            <div className="notification-btn">
              <button onClick={goToChatPage}>
                <ChatIcon />
              </button>
              <button>
                <NotificationIcon />
              </button>
            </div>
            <div className="profile" ref={dropdownRef}>
              <img src="/images/profile-1.jpg" alt="icon" />
              <h2 className="ellipsis">John Smith</h2>
              <div className="logout-btn">
                <button onClick={toggleDropdown}>
                  <ChevronDownIcon />
                </button>
                {showDropdown && (
                  <div className="logout-dropdown">
                    <ul>
                      <li onClick={handleLogout}>
                        <LogoutIcon />
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`superadmin-sidebar ${openSidebar ? "open" : " "}`}
        aria-label="Sidebar Navigation"
      >
        <div className="sidebar-menu">
          <button
            type="button"
            className="expand-toggle"
            onClick={handleNavbarToggle}
            aria-expanded={openSidebar}
            aria-controls="sidebar-menu"
            aria-label={openSidebar ? "Collapse sidebar" : "Expand sidebar"}
          >
            {openSidebar ? <HamburgerIcon /> : <HamburgerIcon />}
          </button>
          <ul
            className={`${openSidebar ? "show" : " "}`}
            role="navigation"
            aria-label="Main Navigation"
          >
            {menuItems.map(({ label, path, icon: Icon }) => (
              <li
                key={label}
                className={path && pathname.startsWith(path) ? "active" : ""}
              >
                <Link href={path}>
                  <div className="icon-wrapper">
                    <Icon />
                  </div>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="img-wrapper">
            <img src="/images/sidebar-img.svg" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
