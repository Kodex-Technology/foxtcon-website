"use client";
import { isSameDay, isToday, isYesterday, format } from "date-fns";
import { NoDataIcon } from "@/svgs";
import MsgItem from "../MsgItem/MsgItem";
import { ChatItem, Message } from "@/types/chat";
import { useEffect, useRef } from "react";

interface MessagesListProps {
    messages: Message[];
    selectedUser: ChatItem;
}

const MessagesList = ({ messages, selectedUser }: MessagesListProps) => {

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!messages || messages.length === 0) {
        return (
            <div className="no-data-available">
                <NoDataIcon />
                <p>No messages yet</p>
            </div>
        );
    }
    return (
        <div className="chat-body">
            {messages.map((message, index) => {
                const currentDate = new Date(message.timestamp);
                const prevDate = index > 0 ? new Date(messages[index - 1].timestamp) : null;
                const showDivider = index === 0 || !prevDate || !isSameDay(currentDate, prevDate);

                return (
                    <MsgItem
                        key={message.id}
                        msg={message}
                        selectedUser={selectedUser}
                        showDateDivider={showDivider}
                    />
                );
            })}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessagesList
