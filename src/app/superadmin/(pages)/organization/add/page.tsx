"use client";
import React, { useState } from "react";
import "./page.scss";
import { validateForm } from "@/shared/ValidationForm";
import {
  step1Rules,
  step2Rules,
  step3Rules,
  step4Rules,
  step5Rules,
  step1EmailFields,
  step1NumberFields,
} from "@/shared/ValidationRules";
import ConfirmationModal from "@/components/superadmin/common/ConfirmationModal/ConfirmationModal";
import Step1OrganizationInfo from "@/components/superadmin/Organization/AddOrganization/Step1OrganizationInfo";
import Step2EmployeesInfo from "@/components/superadmin/Organization/AddOrganization/Step2EmployeesInfo";
import Step3BusinessIndustry from "@/components/superadmin/Organization/AddOrganization/Step3BusinessIndustry";
import Step4Features from "@/components/superadmin/Organization/AddOrganization/Step4Features";
import Step5UploadLogo from "@/components/superadmin/Organization/AddOrganization/Step5UploadLogo";
import Step6ReviewOrganization from "@/components/superadmin/Organization/AddOrganization/Step6ReviewOrganization";
import { showToast } from "@/shared/toastUtils";
import StepNavigator from "@/components/superadmin/Organization/AddOrganization/StepNavigator";
import StepControls from "@/components/superadmin/Organization/AddOrganization/StepControls";
import { MESSAGES } from "@/constant/message";
import {
  steps,
  industries,
  featuresList,
} from "@/constant/organizationFormData";

const AddOrganizationPage = () => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [errorSteps, setErrorSteps] = useState<number[]>([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    organization_name: "",
    organization_email: "",
    location: "",
    country_code: "",
    mobile_no: "",
    employee_range: "",
    industry: "",
    sub_industry: "",
    features: [] as string[],
    logo_url: "",
  });

  const nextStep = () => {
    let currentRules = {};
    let numberFields: string[] = [];
    let emailFields: string[] = [];

    if (step === 1) {
      currentRules = step1Rules;
      emailFields = step1EmailFields;
      numberFields = step1NumberFields;
    } else if (step === 2) {
      currentRules = step2Rules;
    } else if (step === 3) {
      currentRules = step3Rules;
    } else if (step === 4) {
      currentRules = step4Rules;
    } else if (step === 5) {
      currentRules = step5Rules;
    }

    const validationErrors = validateForm(
      formData,
      currentRules,
      numberFields,
      emailFields,
    );

    setErrors((prev) => ({ ...prev, ...validationErrors }));

    if (Object.keys(validationErrors).length === 0) {
      setCompletedSteps((prev) =>
        prev.includes(step) ? prev : [...prev, step],
      );
      setErrorSteps((prev) => prev.filter((s) => s !== step));
      setStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const goToStep = (stepNumber: number) => setStep(stepNumber);
  const toggleFeature = (featureKey: string) => {
    setFormData((prev) => {
      const isSelected = prev.features.includes(featureKey);
      const updatedFeatures = isSelected
        ? prev.features.filter((f) => f !== featureKey)
        : [...prev.features, featureKey];
      if (updatedFeatures.length > 0) {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors.features;
          return newErrors;
        });
      }

      return {
        ...prev,
        features: updatedFeatures,
      };
    });
  };

  const handleInputChange = (key: string, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (value && value.toString().trim() !== "") {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
  };
  const handleConfirmAction = () => {
    setShowConfirmationModal(false);
  };
  const handleSubmit = () => {
    const requiredFields = {
      1: [
        "organization_name",
        "organization_email",
        "location",
        "country_code",
        "mobile_no",
      ],
      2: ["employee_range"],
      3: ["industry", "sub_industry"],
      4: ["features"],
      5: ["logo_url"],
    };

    const stepsWithErrors: number[] = [];

    for (const [stepNum, fields] of Object.entries(requiredFields)) {
      const hasEmpty = fields.some((field) => {
        const value = formData[field as keyof typeof formData];
        if (Array.isArray(value)) return value.length === 0;
        return !value || value.toString().trim() === "";
      });

      if (hasEmpty) {
        stepsWithErrors.push(Number(stepNum));
      }
    }

    if (stepsWithErrors.length > 0) {
      setErrorSteps(stepsWithErrors);
      showToast(MESSAGES.ORGANIZATION.REQUIRED_FIELDS_MISSING, "error");
      return;
    }

    setErrorSteps([]);
    setShowConfirmationModal(true);
    console.log("Submitting form:", formData);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="add-orgainization-page-wrapper">
          <StepNavigator
            currentStep={step}
            steps={steps}
            completedSteps={completedSteps}
            errorSteps={errorSteps}
            onStepClick={goToStep}
          />

          <div className="form-steps-wrapper">
            {step === 1 && (
              <Step1OrganizationInfo
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
              />
            )}

            {step === 2 && (
              <Step2EmployeesInfo
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
              />
            )}

            {step === 3 && (
              <Step3BusinessIndustry
                formData={formData}
                errors={errors}
                industries={industries}
                onChange={handleInputChange}
              />
            )}

            {step === 4 && (
              <Step4Features
                formData={formData}
                errors={errors}
                featuresList={featuresList}
                toggleFeature={toggleFeature}
              />
            )}

            {step === 5 && (
              <Step5UploadLogo
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
              />
            )}
            {step === 6 && (
              <Step6ReviewOrganization
                formData={formData}
                featuresList={featuresList}
              />
            )}
            <StepControls
              currentStep={step}
              totalSteps={steps.length}
              onPrev={prevStep}
              onNext={nextStep}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <ConfirmationModal
        show={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={handleConfirmAction}
        actionType="Done"
        icon="/iconFiles/check.svg"
        message={MESSAGES.ORGANIZATION.ADD_ORGANIZATION}
      />
    </>
  );
};

export default AddOrganizationPage;
