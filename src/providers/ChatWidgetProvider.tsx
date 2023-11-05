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
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
}

export const ChatWidgetContext = createContext({} as ChatWidgetProps);

const ChatWidgetProvider = ({ children }: PropsWithChildren) => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  return (
    <ChatWidgetContext.Provider value={{ isOpenChat, setIsOpenChat }}>
      {children}
    </ChatWidgetContext.Provider>
  );
};

export const useChatWidgetContext = () => useContext(ChatWidgetContext);

export default ChatWidgetProvider;
