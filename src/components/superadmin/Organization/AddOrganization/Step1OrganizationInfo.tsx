"use client";
import React from "react";
import { LocationPinIcon } from "@/svgs";
import PhoneField from "@/components/superadmin/common/PhoneField/PhoneField";

type Step1Props = {
  formData: {
    organization_name: string;
    organization_email: string;
    location: string;
    mobile_no: string;
    country_code: string;
  };
  errors: { [key: string]: string };
  onChange: (key: string, value: string) => void;
};

const Step1OrganizationInfo: React.FC<Step1Props> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="step-wrapper">
      <div className="common-title">
        <h2>Organization Info</h2>
        <p>Please enter the following Information of your organization...</p>
      </div>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="form-field">
              <input
                type="text"
                placeholder="Organization Name"
                value={formData.organization_name}
                onChange={(e) => onChange("organization_name", e.target.value)}
              />
              {errors.organization_name && (
                <p className="error-text">{errors.organization_name}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="form-field">
              <input
                type="email"
                placeholder="Organization Email"
                value={formData.organization_email}
                onChange={(e) => onChange("organization_email", e.target.value)}
              />
              {errors.organization_email && (
                <p className="error-text">{errors.organization_email}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="form-field">
              <PhoneField
                value={formData.mobile_no}
                onChange={(phone, countryCode) => {
                  onChange("mobile_no", phone);
                  onChange("country_code", countryCode ?? "");
                }}
                extractCountryCode={true}
              />
              {errors.mobile_no && (
                <p className="error-text">{errors.mobile_no}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="form-field icon-field">
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => onChange("location", e.target.value)}
              />

              <LocationPinIcon />
            </div>
            {errors.location && <p className="error-text">{errors.location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1OrganizationInfo;
