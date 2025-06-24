export interface Message {
  id: number;
  text: string;
  time: string;
  sender: string;
  seen: boolean;
   timestamp: string;
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
