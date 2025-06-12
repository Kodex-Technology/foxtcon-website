"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Link from "next/link";
import { WebsiteRoutes } from "@/constant/appRoutes";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "@/svgs";
const menuItems = [
  { label: "Foxtcon Advantage", href: WebsiteRoutes.FOXTCON_ADVANTAGE },
  { label: "Management Services", href: WebsiteRoutes.MANAGEMENT_SERVICE },
  { label: "Portfolio", href: WebsiteRoutes.PORTFOLIO },
  { label: "Careers", href: WebsiteRoutes.CAREER },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavbarToggle = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container-lg navbar-container">
        <div className="logo-wrapper">
          <Link href={WebsiteRoutes.HOME}>
            <img src="/iconFiles/foxtcon-logo.svg" alt="logo" />
          </Link>
        </div>
        <div
          className={`menu-wrapper ${openSidebar ? "show" : " "}`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={pathname.startsWith(item.href) ? "active" : ""}
                onClick={() => setOpenSidebar(false)}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className="mobile-signin" onClick={() => setOpenSidebar(false)}>
              <Link href="#">Sign In</Link>
            </li>
          </ul>
        </div>
        <div className="btn-wrapper desktop-signin">
          <button className="btn-style503">Sign In</button>
        </div>
        <div className="expand-toggle" onClick={handleNavbarToggle}>
          {openSidebar ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
