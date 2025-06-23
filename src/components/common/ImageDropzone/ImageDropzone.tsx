"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FeatureUploadIcon, CloseIcon } from "@/svgs";

const ImageDropzone = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    //api call
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="upload-wrapper">
      <input {...getInputProps()} />
      <div className="upload-zone">
        {preview ? (
          <div className="image-preview">
            <img src={preview} alt="Uploaded Preview" className="" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreview(null);
              }}
              className="close-img-preview"
            >
              <CloseIcon />
            </button>
          </div>
        ) : (
          <>
            <FeatureUploadIcon />
            {isDragActive ? (
              <p>Drop the image here...</p>
            ) : (
              <p>
                Drag your logo here or <span>Browse</span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageDropzone;
