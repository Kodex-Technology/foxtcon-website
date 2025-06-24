"use client";
import React from "react";

type StepControlsProps = {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

const StepControls: React.FC<StepControlsProps> = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="steps-control">
      <button
        onClick={onPrev}
        disabled={currentStep === 1}
        className="back-btn"
        type="button"
      >
        Back
      </button>

      {currentStep < totalSteps ? (
        <button onClick={onNext} className="next-btn" type="button">
          Next Step
        </button>
      ) : (
        <button onClick={onSubmit} className="next-btn" type="button">
          Confirm & Add Organization
        </button>
      )}
    </div>
  );
};

export default StepControls;
