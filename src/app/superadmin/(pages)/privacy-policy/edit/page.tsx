"use client";
import CKEditorComponent from "@/components/common/CKEditor/CKEditorComponent";
import React, { useState } from "react";
import "./page.scss";
const PrivacyPolicyEditPage = () => {
  const [content, setContent] = useState(
    "<p>Edit your privacy policy here...</p>",
  );

  const handleSave = () => {
    console.log("Saved content:", content);
    // Call API to save it
  };

  return (
    <div className="container-fluid">
      <div className="privacy-edit-page-wrapper">
        <div className="common-title">
          <h2>Privacy Policy</h2>
        </div>
        <CKEditorComponent value={content} onChange={setContent} />
        <div className="ckeditor-btn">
          <button className="cancel">Cancel</button>
          <button onClick={handleSave} className="save">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyEditPage;
