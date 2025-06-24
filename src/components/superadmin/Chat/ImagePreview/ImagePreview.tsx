'use client';
import React from 'react';
import { CrossExtraIcon } from '@/svgs';
import "./imagepreview.scss";


interface MultiImagePreviewProps {
    selectedFiles: { url: string; type: 'image' | 'file' }[];
    onRemoveFile: (index: number) => void;
}

const ImagePreview = ({ selectedFiles, onRemoveFile }: MultiImagePreviewProps) => {

    if (!selectedFiles.length) return null;

    const getFileIcon = (fileUrl: string) => {
        if (fileUrl.endsWith('.pdf')) return '/iconFiles/pdf-icon.svg';
        if (fileUrl.endsWith('.csv')) return '/iconFiles/csv-icon.svg';
        if (fileUrl.match(/\.(doc|docx)$/)) return '/iconFiles/doc-icon.svg';
        if (fileUrl.match(/\.(xls|xlsx)$/)) return '/iconFiles/excel-icon.svg';
        if (fileUrl.endsWith('.txt')) return '/iconFiles/text-icon.svg';
        return '/iconFiles/unknow-file-icon.svg';
    };

    return (
        <div className="image-preview-wrapper">
            {selectedFiles.map((file, index) => (
                <div className="image-preview" key={index}>
                    <button onClick={() => onRemoveFile(index)}>
                        <CrossExtraIcon />
                    </button>
                    {file.type === 'image' ? (
                        <img
                            src={file.url}
                            alt="Preview"
                            width={200}
                            height={200}
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    ) : (
                        <a href={file.url} target="_blank" rel="noopener noreferrer" className="file-link">
                            <img
                                src={getFileIcon(file.url)}
                                alt="File Icon"
                                width={40}
                                height={40}
                            />
                        </a>
                    )}

                </div>
            ))}
        </div>
    );
};

export default ImagePreview;
