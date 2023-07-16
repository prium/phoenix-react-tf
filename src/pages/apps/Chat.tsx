import ChatContent from 'components/modules/chat/ChatContent';
import ChatSidebar from 'components/modules/chat/ChatSidebar';
import { conversations } from 'data/chat';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import ChatProvider, { useChatContext } from 'providers/ChatProvider';
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
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

  const { chatDispatch } = useChatContext();

  const { breakpoints } = useBreakpoints();
  useEffect(() => {
    chatDispatch({
      type: 'SET_CURRENT_CONVERSATION',
      payload: {
        userId
      }
    });
  }, [userId]);

  return (
    <div className="chat d-flex gap-3">
      {breakpoints.up('sm') && (
        // <Card className="chat-sidebar p-3 p-xl-1">
        <ChatSidebar />
        // </Card>
      )}
      <ChatContent />
    </div>
  );
};

export default index;
