"use client";
import ChatCard from "@/components/common/ChatCard/ChatCard";
import { NoDataIcon, SearchIcon } from "@/svgs";
import { ChatListProps } from "@/types/chat";
import React, { useState } from "react";

const UserList = ({ chatData, selectedUser, onSelectCard }: ChatListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = chatData.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="chat-list-wrapper">
      <div className="chat-list-header">
        <div className="common-title">
          <h2>Inbox</h2>
        </div>
        <select>
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
        </select>
      </div>
      <div className="chat-list-content">
        <div className="serach-input">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="serach-icon">
            <SearchIcon />
          </div>
        </div>
        <div className="chat-list-container">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <ChatCard
                key={chat.id}
                chat={chat}
                isSelected={selectedUser?.id === chat.id}
                onSelect={() => onSelectCard(chat)}
              />
            ))
          ) : (
            <div className="no-data-available">
              <NoDataIcon />
              <p>No chats found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
