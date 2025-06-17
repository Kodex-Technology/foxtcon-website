import React from "react";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  CarretRightIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/svgs";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="logo-wrapper">
            <Image
              src="/iconFiles/foxtcon-color-logo.svg"
              alt="logo"
              width={100}
              height={40}
            />
          </div>
          <div className="description-wrapper">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="social-wrapper">
            <ul>
              <li>
                <Link href="#">
                  <FacebookIcon />
                </Link>
              </li>
              {/* <li>
                <Link href="#">
                  <TwitterIcon />
                </Link>
              </li> */}
              <li>
                <Link href="#">
                  <InstagramIcon />
                </Link>
              </li>
              {/* <li>
                <Link href="#">
                  <PinterestIcon />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h2>Quick Links</h2>
          <div className="footer-links">
            <ul>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Foxtcon Advantage
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Management Services
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Services
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Latitudes By Crescent
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h2>Site Links</h2>
          <div className="footer-links">
            <ul>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CarretRightIcon />
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h2>Stay Tuned With Us</h2>
          <div className="footer-contact-detail">
            <ul>
              <li>
                <LocationIcon />
                7300 NE Parvin Road, Kansas City MO 64117
              </li>
              <li>
                <MailIcon />
                sales@foxtcon.com
              </li>
              <li>
                <PhoneIcon />
                (816) 499-1531
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container copy-right">
        <p>All Rights Reserved © Foxtcon.com</p>
      </div>
    </div>
  );
};

export default Footer;
