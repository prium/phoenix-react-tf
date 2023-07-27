import ChatContent from 'components/modules/chat/chat-content';
import ChatSidebar from 'components/modules/chat/ChatSidebar';
import { conversations } from 'data/chat';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import ChatProvider, { useChatContext } from 'providers/ChatProvider';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const index = () => {
  return (
    <ChatProvider conversations={conversations}>
      <Chat />
    </ChatProvider>
  );
};

const Chat = () => {
  const { userId } = useParams();

  const { chatDispatch, conversations } = useChatContext();

  const { breakpoints } = useBreakpoints();
  useEffect(() => {
    chatDispatch({
      type: 'SET_CURRENT_CONVERSATION',
      payload: {
        userId
      }
    });
  }, [userId, conversations]);

  return (
    <div className="chat d-flex gap-3">
      {breakpoints.up('sm') && <ChatSidebar />}
      <ChatContent />
    </div>
  );
};

export default index;
