"use client";
import { isSameDay, isToday, isYesterday, format } from "date-fns";
import { NoDataIcon } from "@/svgs";
import MsgItem from "../MsgItem/MsgItem";
import { ChatItem, Message } from "@/types/chat";

interface MessagesListProps {
    messages: Message[];
    selectedUser: ChatItem;
}

const MessagesList = ({ messages, selectedUser }: MessagesListProps) => {
    if (!messages || messages.length === 0) {
        return (
            <div className="no-data-available">
                <NoDataIcon />
                <p>No messages yet</p>
            </div>
        );
    }
    return (
        <>
            {messages.map((message, index) => {
                const currentDate = new Date(message.timestamp);
                const prevDate = index > 0 ? new Date(messages[index - 1].timestamp) : null;
                const showDivider = index === 0 || !prevDate || !isSameDay(currentDate, prevDate);

                return (
                    <div key={message.id} className="message-container">
                        <MsgItem
                            msg={message}
                            selectedUser={selectedUser}
                            showDateDivider={showDivider}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default MessagesList
