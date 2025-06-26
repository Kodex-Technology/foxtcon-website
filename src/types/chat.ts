import { KeyboardEvent } from "react";
export interface Message {
  id: number;
  text: string;
  time: string;
  sender: string;
  seen: boolean;
  timestamp: string;
  files?: {
    url: string;
    type: "image" | "file";
  }[];
}

export interface ChatItem {
  id: number;
  name: string;
  company: string;
  date: string;
  message: string;
  unreadCount: number;
  isActive: boolean;
  messages: Message[];
}

export interface ChatListProps {
  chatData: ChatItem[];
  selectedUser: ChatItem | null;
  onSelectCard: (user: ChatItem) => void;
}

export interface ChatCardProps {
  chat: ChatItem;
  isSelected: boolean;
  onSelect: () => void;
}

export interface ChatHeaderProps {
  user: ChatItem | null;
}

export interface MsgItemProps {
  msg: Message;
  selectedUser: ChatItem;
  showDateDivider: boolean;
}

export interface SelectedFile {
  url: string;
  type: "image" | "file";
  file: File;
}

export interface ChatFooterProps {
  onUploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  selectedFiles: SelectedFile[];
  removeImagePreview: (index: number) => void;
  showFilePreview: boolean;
  onSendMessage: () => void;
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  // onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}
