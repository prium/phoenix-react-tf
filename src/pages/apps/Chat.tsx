import ChatContent from 'components/modules/chat/ChatContent';
import ChatSidebar from 'components/modules/chat/ChatSidebar';
import { threads } from 'data/chat';
import ChatProvider, { useChatContext } from 'providers/ChatProvider';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const index = () => {
  return (
    <ChatProvider threads={threads}>
      <Chat />
    </ChatProvider>
  );
};

const Chat = () => {
  const { userId } = useParams();
  console.log({ userId });

  const { setCurrentThread } = useChatContext();

  useEffect(() => {
    setCurrentThread(userId);
  }, [userId]);

  return (
    <div className="chat d-flex gap-3">
      <ChatSidebar />
      <ChatContent />
    </div>
  );
};

export default index;
