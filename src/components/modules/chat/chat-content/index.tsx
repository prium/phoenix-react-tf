import { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { useChatContext } from 'providers/ChatProvider';
import PhoenixOffcanvas, {
  PhoenixOffcanvasContainer
} from 'components/base/PhoenixOffcanvas';
import ConversationDetails from '../conversation-details';
import ChatSidebar from '../ChatSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import ChatContentHeader from './ChatContentHeader';
import ConversationStarter from './ConversationStarter';
import ChatContentFooter from './ChatContentFooter';
import Message from '../message';
import chatIllustration from 'assets/img/spot-illustrations/chat.webp';
import chatDarkIllustration from 'assets/img/spot-illustrations/dark_chat.webp';
import Scrollbar from 'components/base/Scrollbar';

const ChatContent = () => {
  const {
    currentConversation,
    chatDispatch,
    showConversationDetails,
    showUserListOffcanvas,
    setShowConversationDetails
  } = useChatContext();

  const messageEndRef = useRef<null | HTMLSpanElement>(null);

  const { breakpoints } = useBreakpoints();

  useEffect(() => {
    chatDispatch({
      type: 'SET_CHAT_STATE',
      payload: {
        showConversationDetails: false,
        showUserListOffcanvas: false
      }
    });

    messageEndRef.current?.scrollIntoView();
  }, [currentConversation]);

  if (currentConversation) {
    return (
      <Card as={PhoenixOffcanvasContainer} className="h-100 w-100">
        <ChatContentHeader />
        <Card.Body className="p-3 p-sm-4 scrollbar d-flex flex-column gap-2">
          {currentConversation.messages.length === 0 && <ConversationStarter />}
          {currentConversation.messages.map(message => (
            <Message
              message={message}
              user={currentConversation.user}
              key={message.id}
            />
          ))}
          <span ref={messageEndRef} />
        </Card.Body>

        <ChatContentFooter />

        <PhoenixOffcanvas
          open={showConversationDetails}
          placement="top"
          noBackdrop
          className="bg-white w-100 scrollbar"
        >
          <ConversationDetails
            conversation={currentConversation}
            handleClose={() => setShowConversationDetails(false)}
          />
        </PhoenixOffcanvas>

        {breakpoints.down('sm') && (
          <PhoenixOffcanvas
            open={showUserListOffcanvas}
            placement="start"
            noBackdrop
            className="w-100"
          >
            <ChatSidebar className="border-0 h-100" />
          </PhoenixOffcanvas>
        )}
      </Card>
    );
  } else {
    return (
      <Card className="h-100 w-100">
        <Scrollbar>
          <Card.Body className="h-100 d-flex flex-column flex-center text-center">
            <img
              src={chatIllustration}
              alt="chat"
              height={260}
              width={320}
              className="mb-15 d-dark-none"
            />
            <img
              src={chatDarkIllustration}
              alt="chat"
              height={260}
              width={320}
              className="mb-15 d-light-none"
            />
            <h3 className="text-900 fw-semi-bold mb-3 fs-7 fs-sm-6">
              Click to select a Conversation or,
            </h3>
            <h3 className="text-primary fw-semi-bold fs-7 fs-sm-6">
              Start a New Conversation
            </h3>
          </Card.Body>
        </Scrollbar>
      </Card>
    );
  }
};

export default ChatContent;
