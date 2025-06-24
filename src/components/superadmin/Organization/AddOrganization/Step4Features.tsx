"use client";
import React from "react";

type Feature = {
  key: string;
  label: string;
  icon: () => React.JSX.Element;
};

type Step4Props = {
  formData: {
    features: string[];
  };
  errors: { [key: string]: string };
  featuresList: Feature[];
  toggleFeature: (key: string) => void;
};

const Step4Features: React.FC<Step4Props> = ({
  formData,
  errors,
  featuresList,
  toggleFeature,
}) => {
  return (
    <div className="step-wrapper">
      <div className="common-title">
        <h2>Features</h2>
        <p>
          Please select the features you want to give the organization access
          to...
        </p>
      </div>
      <div className="form-wrapper">
        <div className="feature-grid">
          {featuresList.map(({ key, label, icon: Icon }) => (
            <div className="form-field" key={key}>
              <button
                type="button"
                className={`feature-btn ${
                  formData.features.includes(key) ? "selected" : ""
                }`}
                onClick={() => toggleFeature(key)}
              >
                <Icon /> {label}
              </button>
            </div>
          ))}
        </div>
        {errors.features && <p className="error-text">{errors.features}</p>}
      </div>
    </div>
  );
};

export default Step4Features;
