"use client";
import React from "react";
import { FeatureLocationIcon, FeaturePhoneIcon } from "@/svgs";

type Feature = {
  key: string;
  label: string;
  icon: () => React.JSX.Element;
};

type Step6Props = {
  formData: {
    logo_url: string;
    organization_name: string;
    organization_email: string;
    country_code: string;
    mobile_no: string;
    location: string;
    employee_range: string;
    industry: string;
    sub_industry: string;
    features: string[];
  };
  featuresList: Feature[];
};

const Step6ReviewOrganization: React.FC<Step6Props> = ({
  formData,
  featuresList,
}) => {
  return (
    <div className="step-wrapper">
      <div className="common-title">
        <h2>Review Organization</h2>
        <p>Please review the information you have added...</p>
      </div>

      <div className="form-wrapper">
        <div className="preview-container">
          <div className="preview-col">
            <div className="organization-content">
              <div className="img-wrapper">
                {formData.logo_url ? (
                  <img src={formData.logo_url} alt="Organization Logo" />
                ) : (
                  <img src="/images/organization.png" alt="default" />
                )}
              </div>
              <h2>
                {formData.organization_name || "Organization Name"}
                <span>{formData.organization_email || "Email"}</span>
              </h2>
            </div>
            <div className="organization-contact">
              <p>
                <FeaturePhoneIcon />
                {formData.country_code} {formData.mobile_no}
              </p>
              <p>
                <FeatureLocationIcon />
                {formData.location || "Location not provided"}
              </p>
            </div>
          </div>

          <div className="preview-col">
            <div className="common-title">
              <h2>Organizational Info</h2>
            </div>
            <div className="organization-col">
              <p>No. of employees</p>
              <h3>{formData.employee_range || "Not selected"}</h3>
            </div>
            <div className="organization-col">
              <p>Business industry</p>
              <h3>{formData.industry || "Not selected"}</h3>
            </div>
            <div className="organization-col">
              <p>Sub industry</p>
              <h3>{formData.sub_industry || "Not selected"}</h3>
            </div>
          </div>

          <div className="preview-col">
            <div className="common-title">
              <h2>Features</h2>
            </div>
            <div className="row">
              {featuresList
                .filter((feature) => formData.features.includes(feature.key))
                .map(({ key, label, icon: Icon }) => (
                  <div className="col-lg-4 mb-3" key={key}>
                    <div className="feature-col">
                      <Icon />
                      {label}
                    </div>
                  </div>
                ))}
              {formData.features.length === 0 && <p>No features selected.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6ReviewOrganization;
