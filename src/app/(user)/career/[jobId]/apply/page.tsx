"use client";
import React, { useState } from "react";
import "./page.scss";
import { DropDownIcon, UploadIcon } from "@/svgs";
import HeroSection from "@/components/user/Career/HeroSection/HeroSection";
const ApplyJobPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    currentLocation: "",
    willingToRelocate: "",
    positionApplyingFor: "",
    experienceYears: "",
    currentJobTitle: "",
    noticePeriod: "",
    currentSalary: "",
    expectedSalary: "",
    hospitalityExperience: "",
    certifications: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      const formData = new FormData();
      formData.append("file", uploadedFile);
    }
  };

  return (
    <div className="apply-page-wrapper">
      <HeroSection />
      <div className="container">
        <div className="apply-form-container">
          <div className="common-heading">
            <h2>
              Apply For{" "}
              <span>
                Project Manager
                <img src="/iconFiles/underline-heading.svg" alt="icon" />
              </span>{" "}
            </h2>
          </div>
          <div className="form-box">
            <h2>Basic Information:</h2>
            <div className="row">
              <div className="col-lg-4 mb-3">
                <div className="form-field">
                  <input type="text" name="" id="" placeholder="Full Name*" />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="form-field">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address*"
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="form-field">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone Number*"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Current Location*"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field icon-field">
                  <select
                    name="willingToRelocate"
                    value={formData.willingToRelocate}
                    onChange={handleChange}
                    className={
                      formData.willingToRelocate === "" ? "placeholder" : ""
                    }
                  >
                    <option value="" disabled>
                      Are you willing to relocate to Kansas City, USA?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <DropDownIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="form-box">
            <h2>Position Information:</h2>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="form-field icon-field">
                  <select
                    name="positionApplyingFor"
                    value={formData.positionApplyingFor}
                    onChange={handleChange}
                    className={
                      formData.positionApplyingFor === "" ? "placeholder" : ""
                    }
                  >
                    <option value="" disabled>
                      Position You’re Applying For
                    </option>
                    <option value="projectManager">Project Manager</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                  </select>
                  <DropDownIcon />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="How many years of relevant experience do you have?"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Current  Job Title"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Notice Period*"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Current Salary*"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Expected Salary*"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-box">
            <h2>Documents:</h2>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="file-wrapper ">
                  <div className="upload-container">
                    <input
                      type="file"
                      accept=".pdf,.csv,.xlsx,.xls,.doc,.docx"
                      onChange={handleFileUpload}
                      id="fileUpload"
                    />
                    <label htmlFor="fileUpload" className="custom-button">
                      <UploadIcon />
                      <span>Upload CV/Resume*</span>
                    </label>

                    {file && (
                      <div className="file-preview">
                        <p>Selected File: {file.name}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-field">
                  <textarea name="" id="" placeholder="Cover Letter"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-box">
            <h2>Additional Information:</h2>
            <div className="row">
              <div className="col-12 mb-3">
                <div className="form-field">
                  <textarea
                    name=""
                    id=""
                    placeholder="Why do you want to join our hotel?"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-field icon-field">
                  <select
                    name="hospitalityExperience"
                    value={formData.hospitalityExperience}
                    onChange={handleChange}
                    className={
                      formData.hospitalityExperience === "" ? "placeholder" : ""
                    }
                  >
                    <option value="" disabled>
                      Have you previously worked in a hotel or the hospitality
                      industry?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <DropDownIcon />
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="form-field icon-field">
                  <select
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    className={
                      formData.certifications === "" ? "placeholder" : ""
                    }
                  >
                    <option value="" disabled>
                      Do you have any relevant certifications or training?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <DropDownIcon />
                </div>
              </div>
              <div className="col-12">
                <div className="btn-wrapper">
                  <button>Submit your application</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobPage;
