'use client';
import React from 'react';
import { CrossExtraIcon } from '@/svgs';
import "./imagepreview.scss";


interface MultiImagePreviewProps {
    selectedFiles: { url: string; type: 'image' | 'file'; file: File }[];
    onRemoveFile: (index: number) => void;
}

const ImagePreview = ({ selectedFiles, onRemoveFile }: MultiImagePreviewProps) => {

    if (!selectedFiles.length) return null;

    console.log('selected files', selectedFiles)

    const getFileIcon = (file: File) => {
        const ext = file.name.split('.').pop()?.toLowerCase() || '';

        switch (ext) {
            case 'pdf':
                return '/iconFiles/pdf-icon.svg';
            case 'csv':
                return '/iconFiles/csv-icon.svg';
            case 'doc':
            case 'docx':
                return '/iconFiles/doc-icon.svg';
            case 'xls':
            case 'xlsx':
                return '/iconFiles/excel-icon.svg';
            case 'txt':
                return '/iconFiles/text-icon.svg';
            default:
                return '/iconFiles/unknow-file-icon.svg';
        }
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
                                src={getFileIcon(file.file)}
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
