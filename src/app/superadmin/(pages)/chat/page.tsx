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
  const [newMessage, setNewMessage] = useState<string>("");

  const onUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const updatedFiles: SelectedFile[] = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("image/") ? "image" : "file",
      file,
    }));

    setSelectedFiles((prev) => [...prev, ...updatedFiles]);
    setShowFilePreview(true);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImagePreview = (index: number) => {
    const updated = [...selectedFiles];
    updated.splice(index, 1);
    setSelectedFiles(updated);
    if (updated.length === 0) setShowFilePreview(false);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() && selectedFiles.length === 0) return;

    const now = new Date();
    const newMsg = {
      id: Date.now(),
      text: newMessage.trim(),
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "me",
      seen: false,
      timestamp: now.toISOString(),
      files: selectedFiles.map((f) => ({
        url: f.url,
        type: f.type,
      })),
    };

    const updatedUser = {
      ...selectedUser,
      messages: [...selectedUser.messages, newMsg],
    };

    setSelectedUser(updatedUser);
    setNewMessage("");
    setSelectedFiles([]);
    setShowFilePreview(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
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
            onSendMessage={handleSendMessage}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
