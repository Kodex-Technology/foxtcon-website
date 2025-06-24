import { MsgSeenIcon } from "@/svgs";
import { MsgItemProps } from "@/types/chat";
import React from "react";

const MsgItem = ({ msg, selectedUser }: MsgItemProps) => {
  return (
    <div
      key={msg.id}
      className={`chat-message ${msg.sender === "me" ? "sent" : "received"}`}
    >
      <p className="time">{msg.time}</p>
      <div className="chat-bubble">
        {msg.sender === "user" && (
          <div className="chat-img">
            <img src={`/images/profile-${selectedUser.id}.jpg`} alt="img" />
          </div>
        )}
        <p className="message-text">{msg.text}</p>
      </div>
      {msg.sender === "me" && (
        <span className={`status ${msg.seen ? "seen" : ""}`}>
          <MsgSeenIcon />
        </span>
      )}
    </div>
  );
};

export default MsgItem;
