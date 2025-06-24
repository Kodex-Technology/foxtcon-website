"use client";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FeatureUploadIcon, CloseIcon } from "@/svgs";
interface ImageDropzoneProps {
  initialUrl?: string;
  onUpload?: (url: string) => void;
  onRemove?: () => void;
}

const ImageDropzone = ({
  onUpload,
  onRemove,
  initialUrl,
}: ImageDropzoneProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  useEffect(() => {
    if (initialUrl) {
      setPreview(initialUrl);
    }
  }, [initialUrl]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      if (onUpload) {
        onUpload(previewUrl);
      }
      //api call
    },
    [onUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    onRemove?.();
  };
  return (
    <div {...getRootProps()} className="upload-wrapper">
      <input {...getInputProps()} />
      <div className="upload-zone">
        {preview ? (
          <div className="image-preview">
            <img src={preview} alt="Uploaded Preview" className="" />
            <button
              type="button"
              onClick={handleRemove}
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
