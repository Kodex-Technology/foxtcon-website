"use client";
import React, { useState } from "react";
import "./page.scss";
import {
  CheckIcon,
  LocationPinIcon,
  FeatureClockIcon,
  FeatureScheduleIcon,
  FeatureCheckListIcon,
  FeatureTaskManagementIcon,
  FeatureChatIcon,
  FeatureDirectoryIcon,
  FeatureEventsIcon,
  FeatureKnowledgeIcon,
  FeatureTimeIcon,
  FeatureTrainingIcon,
  FeatureRewardIcon,
  FeatureDocumentIcon,
} from "@/svgs";
import PhoneField from "@/components/superadmin/common/PhoneField/PhoneField";
import ImageDropzone from "@/components/common/ImageDropzone/ImageDropzone";
const steps = [
  { label: "Organization Info" },
  { label: "Employees Info" },
  { label: "Business Industry" },
  { label: "Features" },
  { label: "Upload Logo" },
  { label: "Preview & Submit" },
];
const industries = [
  {
    name: "Information",
    subIndustries: [
      "Information",
      "Telecommunications",
      "Media",
      "Publishing",
      "Other",
    ],
  },
  {
    name: "Finance",
    subIndustries: ["Banking", "Insurance", "Fintech"],
  },
  {
    name: "Healthcare",
    subIndustries: ["Hospitals", "Pharmaceuticals", "Medical Devices"],
  },
];
const featuresList = [
  { key: "time_clock", label: "Time Clock", icon: <FeatureClockIcon /> },
  { key: "schedule", label: "Schedule", icon: <FeatureScheduleIcon /> },
  {
    key: "forms_checklists",
    label: "Forms & Checklists",
    icon: <FeatureCheckListIcon />,
  },
  {
    key: "task_management",
    label: "Task Management",
    icon: <FeatureTaskManagementIcon />,
  },
  { key: "chat_updates", label: "Chat & Updates", icon: <FeatureChatIcon /> },
  { key: "directory", label: "Directory", icon: <FeatureDirectoryIcon /> },
  { key: "events", label: "Events", icon: <FeatureEventsIcon /> },
  {
    key: "knowledge_base",
    label: "Knowledge Base",
    icon: <FeatureKnowledgeIcon />,
  },
  { key: "time_off", label: "Time Off Management", icon: <FeatureTimeIcon /> },
  {
    key: "training_onboarding",
    label: "Training & Onboarding",
    icon: <FeatureTrainingIcon />,
  },
  {
    key: "document_management",
    label: "Document Management",
    icon: <FeatureDocumentIcon />,
  },
  {
    key: "recognition_rewards",
    label: "Recognitions & Rewards",
    icon: <FeatureRewardIcon />,
  },
];

const AddOrganizationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country_code: "",
    mobile_no: "",
    employee_range: "",
    industry: "",
    sub_industry: "",
    features: [] as string[],
  });
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const goToStep = (stepNumber: number) => setStep(stepNumber);
  const toggleFeature = (featureKey: string) => {
    setFormData((prev) => {
      const isSelected = prev.features.includes(featureKey);
      return {
        ...prev,
        features: isSelected
          ? prev.features.filter((f) => f !== featureKey)
          : [...prev.features, featureKey],
      };
    });
  };

  const handleInputChange = (key: string, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSubmit = () => {
    console.log("Submitting form:", formData);
    // TODO: Send to API here
  };
  console.log("formData", formData);
  return (
    <div className="container-fluid">
      <div className="add-orgainization-page-wrapper">
        <div className="fom-steps-count">
          <div className="steps-header">
            <h2>Add Organization</h2>
          </div>
          <div className="steps-count-wrapper">
            {steps.map((stepData, index) => {
              const stepNum = index + 1;
              const isCompleted = step > stepNum;
              const isActive = step === stepNum;

              return (
                <button
                  key={stepNum}
                  onClick={() => goToStep(stepNum)}
                  className={`${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                >
                  <div className="check-count">
                    {isCompleted ? <CheckIcon /> : `0${stepNum}`}
                  </div>
                  {stepData.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-steps-wrapper">
          {step === 1 && (
            <div className="step-wrapper">
              <div className="common-title">
                <h2>Organization Info</h2>
                <p>
                  Please enter the following Information of your organization...
                </p>
              </div>
              <div className="form-wrapper">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <div className="form-field">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Organization Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <div className="form-field">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Organization Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <div className="form-field">
                      <PhoneField
                        value={formData.mobile_no}
                        onChange={(phone, countryCode) => {
                          handleInputChange("mobile_no", phone);
                          handleInputChange("country_code", countryCode);
                        }}
                        extractCountryCode={true}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <div className="form-field icon-field">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Location"
                      />
                      <LocationPinIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-wrapper">
              <div className="common-title">
                <h2>Employees Info</h2>
                <p>
                  Please select the number of employees your organization
                  have...
                </p>
              </div>
              <div className="form-wrapper">
                <div className="row">
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "1-10" ? "selected" : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "1-10")
                        }
                      >
                        1-10
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "11-30" ? "selected" : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "11-30")
                        }
                      >
                        11-30
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "31-50" ? "selected" : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "31-50")
                        }
                      >
                        31-50
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "51-100" ? "selected" : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "51-100")
                        }
                      >
                        51-100
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "101-200"
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "101-200")
                        }
                      >
                        101-200
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "201-500"
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "201-500")
                        }
                      >
                        201-500
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "501-1000"
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "501-1000")
                        }
                      >
                        501-1000
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="form-field">
                      <button
                        className={
                          formData.employee_range === "1000" ? "selected" : ""
                        }
                        onClick={() =>
                          handleInputChange("employee_range", "1000")
                        }
                      >
                        1000+
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-wrapper">
              <div className="common-title">
                <h2>Business Industry</h2>
                <p>
                  Please select the industry that fits best to your
                  organization...
                </p>
              </div>
              <div className="form-wrapper">
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <div className="form-field">
                      <select
                        className="form-select"
                        value={formData.industry}
                        onChange={(e) => {
                          handleInputChange("industry", e.target.value);
                          handleInputChange("sub_industry", "");
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
              </div>
              {formData.industry && (
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
                      {industries
                        .find((ind) => ind.name === formData.industry)
                        ?.subIndustries.map((sub) => (
                          <div className="form-field" key={sub}>
                            <button
                              className={
                                formData.sub_industry === sub ? "selected" : ""
                              }
                              onClick={() =>
                                handleInputChange("sub_industry", sub)
                              }
                            >
                              {sub}
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="step-wrapper">
              <div className="common-title">
                <h2>Features</h2>
                <p>
                  Please select the features you want to give the organization
                  access to...
                </p>
              </div>
              <div className="form-wrapper">
                <div className="feature-grid">
                  {featuresList.map(({ key, label, icon }) => (
                    <div className="form-field" key={key}>
                      <button
                        className={`feature-btn ${formData.features.includes(key) ? "selected" : ""}`}
                        onClick={() => toggleFeature(key)}
                        type="button"
                      >
                        {icon} {label}
                      </button>
                    </div>
                  ))}
                </div>

                {/* <div className="row">
                  {featuresList.map(({ key, label, icon }) => (
                    <div className="col-lg-6 col-xl-3 mb-3" key={key}>
                      <div className="form-field">
                        <button
                          className={`feature-btn ${formData.features.includes(key) ? "selected" : ""}`}
                          onClick={() => toggleFeature(key)}
                          type="button"
                        >
                          {icon} {label}
                        </button>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="step-wrapper">
              <div className="common-title">
                <h2>Upload Logo</h2>
                <p>Please upload the logo of your organization...</p>
              </div>
              <div className="form-wrapper">
                <ImageDropzone />
              </div>
            </div>
          )}
          {step === 6 && (
            <div>
              <h3>Preview & Submit</h3>
            </div>
          )}

          <div className="steps-control">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="back-btn"
            >
              Back
            </button>

            {step < steps.length ? (
              <button onClick={nextStep} className="next-btn">
                Next Step
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn btn-success">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrganizationPage;
