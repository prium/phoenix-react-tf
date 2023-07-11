import { ChatThread } from 'data/chat';
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface ChatProviderInterface {
  threads: ChatThread[];
}

interface ChatContextInterface {
  currentThread: null | ChatThread;
  setCurrentThread: (userId?: number | string) => void;
}

export const ChatContext = createContext({} as ChatContextInterface);

const ChatProvider = ({
  children,
  threads
}: PropsWithChildren<ChatProviderInterface>) => {
  const [currentThread, setCurrentThread] = useState<null | ChatThread>(null);

  const updateCurrentThread = (userId?: number | string) => {
    const thread = threads.find(thread => thread.user.id === Number(userId));
    if (thread) {
      setCurrentThread(thread);
    } else {
      setCurrentThread(null);
    }
  };
  return (
    <ChatContext.Provider
      value={{ currentThread, setCurrentThread: updateCurrentThread }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatProvider;
