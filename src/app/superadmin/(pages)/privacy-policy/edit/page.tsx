"use client";

import React from "react";
import PolicyEditorPage from "@/components/superadmin/common/PolicyEditor/PolicyEditorPage";
const PrivacyPolicyEditPage = () => {
  const handleSave = (content: string) => {
    // API call to save Privacy Policy
    console.log("Privacy policy saved:", content);
  };

  return (
    <PolicyEditorPage
      title="Privacy Policy"
      initialContent="<p>Edit your privacy policy here...</p>"
      onSave={handleSave}
    />
  );
};

export default PrivacyPolicyEditPage;
