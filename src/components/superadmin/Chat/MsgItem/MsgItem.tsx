import { MsgSeenIcon } from "@/svgs";
import { MsgItemProps } from "@/types/chat";
import { isToday, isYesterday, format } from "date-fns";
import React from "react";

const MsgItem = ({ msg, selectedUser, showDateDivider }: MsgItemProps) => {
  const messageDate = new Date(msg.timestamp);
  const currentYear = new Date().getFullYear();
  const messageYear = messageDate.getFullYear();
  const handleImageClick = (dataUrl: string) => {
    const newTab = window.open();
    if (newTab) {
      newTab.document.title = "Image Preview";
      newTab.document.body.innerHTML = "";
      const img = newTab.document.createElement("img");
      img.src = dataUrl;
      img.style.maxWidth = "100%";
      newTab.document.body.appendChild(img);
    } else {
      console.log("Please allow pop-ups to view the image.");
    }
  };
  const getFileIconPath = (fileName: string): string => {
    const ext = fileName.split(".").pop()?.toLowerCase() || "";

    switch (ext) {
      case "pdf":
        return "/iconFiles/pdf-icon.svg";
      case "csv":
        return "/iconFiles/csv-icon.svg";
      case "doc":
      case "docx":
        return "/iconFiles/doc-icon.svg";
      case "xls":
      case "xlsx":
        return "/iconFiles/excel-icon.svg";
      case "txt":
        return "/iconFiles/text-icon.svg";
      default:
        return "/iconFiles/unknow-file-icon.svg";
    }
  };

  return (
    <div className="message-container">
      {showDateDivider && (
        <div className="message-divider">
          <div className="divider-line"></div>
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
          <div className="message-content">
            <p className="message-text">{msg.text}</p>
            {msg.files && msg.files.length > 0 && (
              <div className="attached-files-wrapper">
                {msg.files.map((file, idx) => (
                  <div key={idx} className="attached-file-preview">
                    {file.type === "image" ? (
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="image-link"
                      >
                        {" "}
                        <img
                          src={file.url}
                          alt="attachment"
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                        />
                      </a>
                    ) : (
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={getFileIconPath(file.url)} alt="file icon" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
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
