"use client";
import React, { useState } from "react";
import CKEditorComponent from "@/components/common/CKEditor/CKEditorComponent";
import "./PolicyEditorPage.scss";

interface PolicyEditorPageProps {
  title: string;
  initialContent: string;
  onSave: (content: string) => void;
}

const PolicyEditorPage: React.FC<PolicyEditorPageProps> = ({
  title,
  initialContent,
  onSave,
}) => {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    console.log("Saved content:", content);
    onSave(content);
  };

  return (
    <div className="container-fluid">
      <div className="privacy-edit-page-wrapper">
        <div className="common-title">
          <h2>{title}</h2>
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

export default PolicyEditorPage;
