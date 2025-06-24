"use client";
import React from "react";
import ImageDropzone from "@/components/common/ImageDropzone/ImageDropzone";

type Step5Props = {
  formData: {
    logo_url: string;
  };
  errors: { [key: string]: string };
  onChange: (key: string, value: string) => void;
};

const Step5UploadLogo: React.FC<Step5Props> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="step-wrapper">
      <div className="common-title">
        <h2>Upload Logo</h2>
        <p>Please upload the logo of your organization...</p>
      </div>

      <div className="form-wrapper">
        <ImageDropzone
          initialUrl={formData.logo_url}
          onUpload={(url) => onChange("logo_url", url)}
          onRemove={() => onChange("logo_url", "")}
        />
        {errors.logo_url && <p className="error-text">{errors.logo_url}</p>}
      </div>
    </div>
  );
};

export default Step5UploadLogo;
