"use client";
import React from "react";
import "./page.scss";
import { EditIcon } from "@/svgs";
import { useRouter } from "next/navigation";
import { SuperAdminRoutes } from "@/constant/appRoutes";
const PrivacyPolicyPage = () => {
  const route = useRouter();
  const goToEditPage = () => {
    route.push(SuperAdminRoutes.PRIVACY_POLICY_EDIT);
  };
  return (
    <div className="container-fluid">
      <div className="privacy-page-wrapper">
        <div className="header-section">
          <div className="common-title">
            <h2>Privacy Policy</h2>
          </div>
          <button onClick={goToEditPage}>
            <EditIcon />
            Update
          </button>
        </div>
        <div className="privacy-content">
          <div className="privacy-col">
            <p>
              This Privacy Policy describes how we collect, use, and protect
              your personal information when you use our services. We are
              committed to safeguarding your data and ensuring transparency in
              how it handled.
            </p>
          </div>
          <div className="privacy-col">
            <h2>Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and payment details when you register, make
              a purchase, or interact with our services. Additionally, we
              collect technical data like your IP address and browser type.
            </p>
          </div>
          <div className="privacy-col">
            <h2>How We Use Your Information</h2>
            <p>
              Your information is used to provide and improve our services,
              personalize user experience, process transactions, and send
              periodic emails related to updates or promotions. We do not sell
              or share your personal data without your consent.
            </p>
          </div>
          <div className="privacy-col">
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience. Cookies help
              us understand user behavior and improve site functionality. You
              can control cookie settings through your browser at any time.
            </p>
          </div>
          <div className="privacy-col">
            <h2>Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </div>
          <div className="privacy-col">
            <h2>Third-Party Services</h2>
            <p>
              Our services may include links to third-party websites or use
              third-party services. We are not responsible for the privacy
              practices or content of such third parties. We recommend reading
              their privacy policies.
            </p>
          </div>
          <div className="privacy-col">
            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also withdraw consent or object to processing
              at any time by contacting us directly.
            </p>
          </div>
          <div className="privacy-col">
            <h2>Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with an updated effective
              date. Continued use of our services constitutes acceptance of the
              updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
