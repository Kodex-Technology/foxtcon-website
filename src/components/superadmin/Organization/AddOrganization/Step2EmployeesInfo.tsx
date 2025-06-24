"use client";
import React from "react";

type Step2Props = {
  formData: {
    employee_range: string;
  };
  errors: { [key: string]: string };
  onChange: (key: string, value: string) => void;
};

const employeeRanges = [
  "1-10",
  "11-30",
  "31-50",
  "51-100",
  "101-200",
  "201-500",
  "501-1000",
  "1000",
];

const Step2EmployeesInfo: React.FC<Step2Props> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="step-wrapper">
      <div className="common-title">
        <h2>Employees Info</h2>
        <p>Please select the number of employees your organization have...</p>
      </div>
      <div className="form-wrapper">
        <div className="row">
          {employeeRanges.map((range) => (
            <div key={range} className="col-lg-3 mb-3">
              <div className="form-field">
                <button
                  className={
                    formData.employee_range === range ? "selected" : ""
                  }
                  onClick={() => onChange("employee_range", range)}
                  type="button"
                >
                  {range === "1000" ? "1000+" : range}
                </button>
              </div>
            </div>
          ))}
        </div>
        {errors.employee_range && (
          <p className="error-text">{errors.employee_range}</p>
        )}
      </div>
    </div>
  );
};

export default Step2EmployeesInfo;
