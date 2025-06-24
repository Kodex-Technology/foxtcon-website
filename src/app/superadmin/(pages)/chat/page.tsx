"use client";
import React, { useRef, useState } from "react";
import "./page.scss";
import { chatData } from "@/data/chatData";
import ChatHeader from "@/components/superadmin/Chat/ChatHeader/ChatHeader";
import { ChatItem, SelectedFile } from "@/types/chat";
import UserList from "@/components/superadmin/Chat/UserList/UserList";
import MessagesList from "@/components/superadmin/Chat/MessagesList/MessagesList";
import ChatFooter from "@/components/superadmin/Chat/ChatFooter/ChatFooter";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState<ChatItem>(chatData[0]);
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showFilePreview, setShowFilePreview] = useState<boolean>(false);

  const onUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const updatedFiles: SelectedFile[] = [];

    if (files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updatedFiles.push({
            url: event.target.result as string,
            type: file.type.startsWith("image/") ? "image" : "file",
            file,
          });

          if (updatedFiles.length === files.length) {
            setSelectedFiles((prev) => [...prev, ...updatedFiles]);
            setShowFilePreview(true);
            if (fileInputRef.current) fileInputRef.current.value = "";
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImagePreview = (index: number) => {
    const updated = [...selectedFiles];
    updated.splice(index, 1);
    setSelectedFiles(updated);
    if (updated.length === 0) setShowFilePreview(false);
  };

  return (
    <div className="container-fluid">
      <div className="chat-page-wrapper">
        <UserList
          chatData={chatData}
          selectedUser={selectedUser}
          onSelectCard={setSelectedUser}
        />
        <div className="chat-msg-wrapper">
          <ChatHeader user={selectedUser} />
          <MessagesList
            messages={selectedUser.messages}
            selectedUser={selectedUser}
          />

          <ChatFooter
            onUploadFile={onUploadFile}
            fileInputRef={fileInputRef}
            selectedFiles={selectedFiles}
            removeImagePreview={removeImagePreview}
            showFilePreview={showFilePreview}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
