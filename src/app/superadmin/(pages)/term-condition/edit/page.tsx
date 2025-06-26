"use client";
import React from "react";
import PolicyEditorPage from "@/components/superadmin/common/PolicyEditor/PolicyEditorPage";
const TermConditionEditPage = () => {
  const handleSave = (content: string) => {
    // API call to save Terms and Conditions
    console.log("Terms saved:", content);
  };
  return (
    <PolicyEditorPage
      title="Terms and Conditions"
      initialContent="<p>Edit your terms and conditions here...</p>"
      onSave={handleSave}
    />
  );
};

export default TermConditionEditPage;
