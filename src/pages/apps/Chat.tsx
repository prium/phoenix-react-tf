import ChatContent from 'components/modules/chat/ChatContent';
import ChatSidebar from 'components/modules/chat/ChatSidebar';
import React from 'react';

const Chat = () => {
  return (
    <div className="chat d-flex gap-3">
      <ChatSidebar />
      <ChatContent />
    </div>
  );
};

export default Chat;
