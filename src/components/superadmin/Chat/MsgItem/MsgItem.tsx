import { MsgSeenIcon } from "@/svgs";
import { MsgItemProps } from "@/types/chat";
import { isToday, isYesterday, format } from "date-fns";
import React from "react";

const MsgItem = ({ msg, selectedUser, showDateDivider }: MsgItemProps) => {
  const messageDate = new Date(msg.timestamp);
  const currentYear = new Date().getFullYear();
  const messageYear = messageDate.getFullYear();
  return (
    <div className="message-container">
      {showDateDivider && (
        <div className="message-divider">
          <div className="divider-line">

          </div>
          <span>
            {isToday(messageDate)
              ? "Today"
              : isYesterday(messageDate)
                ? "Yesterday"
                : messageYear === currentYear
                  ? format(messageDate, "MMMM d")
                  : format(messageDate, "MMMM d, yyyy")}
          </span>
        </div>
      )}
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
    </div>
  );
};

export default MsgItem;
