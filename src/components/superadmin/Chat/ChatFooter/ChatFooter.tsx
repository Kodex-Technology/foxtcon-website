'use client';
import React, { useRef, useEffect, useState } from 'react';
import { SendIcon, UploadChatIcon } from '@/svgs';
import "./chatfooter.scss";
import { ChatFooterProps, SelectedFile } from '@/types/chat';
import ImagePreview from '../ImagePreview/ImagePreview';



const ChatFooter = ({
    onUploadFile,
    fileInputRef,
    selectedFiles,
    removeImagePreview,
    showFilePreview,
    onSendMessage,
    newMessage,
    setNewMessage,
}: ChatFooterProps) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '40px';
        }
    }, []);

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setNewMessage(value);

        if (textareaRef.current) {
            textareaRef.current.style.height = "40px";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = Math.min(scrollHeight, 100) + "px";
        }
    };

    return (
        <div className="chat-footer-wrapper">
            <div className="chat-input">
                <textarea
                    ref={textareaRef}
                    placeholder="Write your message here..."
                    value={newMessage}
                    onChange={onMessageChange}
                />
            </div>
            <div className="chat-actions">
                <div className="upload-wrapper" style={{ cursor: "pointer" }}>
                    <label htmlFor="file-upload">
                        <UploadChatIcon />
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        multiple
                        onChange={onUploadFile}
                        ref={fileInputRef}
                    />
                </div>
                <button onClick={onSendMessage}>
                    <SendIcon />
                </button>
            </div>
            {showFilePreview && selectedFiles.length > 0 && (
                <ImagePreview
                    selectedFiles={selectedFiles}
                    onRemoveFile={removeImagePreview}
                />
            )}
        </div>
    );
};

export default ChatFooter;
