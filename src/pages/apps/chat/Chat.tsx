import { conversations } from 'data/chat';
import ChatProvider from 'providers/ChatProvider';
import { Outlet } from 'react-router-dom';

const Chat = () => {
  return (
    <ChatProvider conversations={conversations}>
      <div className="chat d-flex gap-3 mb-9">
        <Outlet />
      </div>
    </ChatProvider>
  );
};

export default Chat;
