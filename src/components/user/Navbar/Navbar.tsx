"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Link from "next/link";
import { WebsiteRoutes } from "@/constant/appRoutes";
import { usePathname } from "next/navigation";
const menuItems = [
  { label: "Foxtcon Advantage", href: WebsiteRoutes.FOXTCON_ADVANTAGE },
  { label: "Management Services", href: WebsiteRoutes.MANAGEMENT_SERVICE },
  { label: "Portfolio", href: WebsiteRoutes.PORTFOLIO },
  { label: "Careers", href: WebsiteRoutes.CAREER },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="logo-wrapper">
          <Link href={WebsiteRoutes.HOME}>
            <img src="/iconFiles/foxtcon-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="menu-wrapper">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={pathname === item.href ? "active" : ""}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="btn-wrapper">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
