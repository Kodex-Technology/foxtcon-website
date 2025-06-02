"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          <Image
            src="/iconFiles/foxtcon-logo.svg"
            alt="logo"
            width={100}
            height={40}
          />
        </div>
        <div className="menu-wrapper">
          <ul>
            {" "}
            <li>
              <Link href="#">Foxtcon Advantage</Link>
            </li>
            <li>
              <Link href="#">Management Services</Link>
            </li>
            <li>
              <Link href="#">Portfolio</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
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
