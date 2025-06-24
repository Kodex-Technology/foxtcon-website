"use client";
import React, { useState } from "react";
import "./page.scss";
import { chatData } from "@/data/chatData";
import ChatHeader from "@/components/superadmin/Chat/ChatHeader/ChatHeader";
import { ChatItem } from "@/types/chat";
import UserList from "@/components/superadmin/Chat/UserList/UserList";
import MsgItem from "@/components/superadmin/Chat/MsgItem/MsgItem";
import { NoDataIcon } from "@/svgs";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState<ChatItem>(chatData[0]);

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
          <div className="chat-body">
            {selectedUser?.messages && selectedUser.messages.length > 0 ? (
              selectedUser.messages?.map((msg) => (
                <MsgItem key={msg.id} msg={msg} selectedUser={selectedUser} />
              ))
            ) : (
              <div className="no-data-available">
                <NoDataIcon />
                <p>No messages yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
