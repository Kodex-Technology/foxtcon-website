"use client";
import React from "react";
import { CheckIcon } from "@/svgs";

type Step = {
  label: string;
};

type StepNavigatorProps = {
  currentStep: number;
  steps: Step[];
  completedSteps: number[];
  errorSteps: number[];
  onStepClick: (step: number) => void;
};

const StepNavigator: React.FC<StepNavigatorProps> = ({
  currentStep,
  steps,
  completedSteps,
  errorSteps,
  onStepClick,
}) => {
  return (
    <div className="fom-steps-count">
      <div className="steps-header">
        <h2>Add Organization</h2>
      </div>
      <div className="steps-count-wrapper">
        {steps.map((stepData, index) => {
          const stepNum = index + 1;
          const isCompleted = completedSteps.includes(stepNum);
          const isActive = currentStep === stepNum;
          const isEnabled =
            stepNum === 1 || completedSteps.includes(stepNum - 1);
          const isError = errorSteps.includes(stepNum);

          return (
            <button
              key={stepNum}
              onClick={() => isEnabled && onStepClick(stepNum)}
              disabled={!isEnabled}
              className={`${isActive ? "active" : ""} ${isCompleted ? "completed" : ""} ${isError ? "error" : ""}`}
              type="button"
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
  );
};

export default StepNavigator;
