import React from "react";
import { ChatCardProps } from "@/types/chat";
import "./ChatCard.scss";

const ChatCard = ({ chat, isSelected, onSelect }: ChatCardProps) => {
  return (
    <div
      className={`chat-card ${isSelected ? "active" : ""}`}
      onClick={onSelect}
    >
      <div className="chat-card-header">
        <div className="chat-header-profile">
          <div className="chat-header-img">
            <img src={`/images/profile-${chat.id}.jpg`} alt="img" />
            <span className={chat?.isActive ? "active" : ""}></span>
          </div>
          <h2>
            {chat.name}
            <span>{chat.company}</span>
          </h2>
        </div>
        <p>{chat.date}</p>
      </div>
      <div className="chat-card-content">
        <p>{chat.message}</p>
        {chat.unreadCount > 0 && <span>{chat.unreadCount}</span>}
      </div>
    </div>
  );
};

export default ChatCard;
