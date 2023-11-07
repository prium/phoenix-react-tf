import { supportChat, Message as MessageType, Conversation } from 'data/chat';
import dayjs from 'dayjs';
import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  Dispatch,
  SetStateAction
} from 'react';

interface ChatWidgetProps {
  isOpenChat: boolean;
  conversation: Conversation;
  setConversation: Dispatch<SetStateAction<Conversation>>;
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
  messageText: string;
  setMessageText: Dispatch<SetStateAction<string>>;
  fileAttachment: File | null;
  setFileAttachment: Dispatch<SetStateAction<File | null>>;
  imageAttachments: File[];
  setImageAttachments: Dispatch<SetStateAction<File[]>>;
  sentMessage: (text?: string) => void;
}

export const ChatWidgetContext = createContext({} as ChatWidgetProps);

const ChatWidgetProvider = ({ children }: PropsWithChildren) => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [conversation, setConversation] = useState(supportChat);
  const [messageText, setMessageText] = useState('');
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [imageAttachments, setImageAttachments] = useState<File[]>([]);
  const sentMessage = (text?: string) => {
    if (messageText.trim() || text) {
      const newMessages = [
        {
          id: Date.now(),
          type: 'sent',
          time: dayjs().toNow(),
          readAt: null,
          message: messageText || text
        } as MessageType,
        ...conversation.messages
      ];
      const newConversation = { ...conversation, messages: newMessages };
      setConversation(newConversation);
      setMessageText('');
    }
  };
  return (
    <ChatWidgetContext.Provider
      value={{
        conversation,
        setConversation,
        fileAttachment,
        setFileAttachment,
        imageAttachments,
        setImageAttachments,
        isOpenChat,
        setIsOpenChat,
        messageText,
        setMessageText,
        sentMessage
      }}
    >
      {children}
    </ChatWidgetContext.Provider>
  );
};

export const useChatWidgetContext = () => useContext(ChatWidgetContext);

export default ChatWidgetProvider;
