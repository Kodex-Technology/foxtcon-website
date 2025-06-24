"use client";
import React from "react";

type Industry = {
  name: string;
  subIndustries: string[];
};

type Step3Props = {
  formData: {
    industry: string;
    sub_industry: string;
  };
  errors: { [key: string]: string };
  industries: Industry[];
  onChange: (key: string, value: string) => void;
};

const Step3BusinessIndustry: React.FC<Step3Props> = ({
  formData,
  errors,
  industries,
  onChange,
}) => {
  const selectedIndustry = industries.find(
    (ind) => ind.name === formData.industry,
  );

  return (
    <div className="step-wrapper">
      <div className="common-title">
        <h2>Business Industry</h2>
        <p>Please select the industry that fits best to your organization...</p>
      </div>

      <div className="form-wrapper">
        <div className="row">
          <div className="col-lg-12 mb-3">
            <div className="form-field">
              <select
                className="form-select"
                value={formData.industry}
                onChange={(e) => {
                  onChange("industry", e.target.value);
                  onChange("sub_industry", "");
                }}
              >
                <option value="">Choose Industry</option>
                {industries.map((industry) => (
                  <option key={industry.name} value={industry.name}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {errors.industry && <p className="error-text">{errors.industry}</p>}
      </div>

      {formData.industry && selectedIndustry && (
        <>
          <div className="common-title">
            <h2>Sub-Industry</h2>
            <p>
              Please select the Sub-industry that fits best to your
              organization...
            </p>
          </div>

          <div className="form-wrapper">
            <div className="sub-industry-grid">
              {selectedIndustry.subIndustries.map((sub) => (
                <div className="form-field" key={sub}>
                  <button
                    className={formData.sub_industry === sub ? "selected" : ""}
                    onClick={() => onChange("sub_industry", sub)}
                    type="button"
                  >
                    {sub}
                  </button>
                </div>
              ))}
            </div>
            {errors.sub_industry && (
              <p className="error-text">{errors.sub_industry}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Step3BusinessIndustry;
