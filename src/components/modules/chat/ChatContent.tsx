import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { useEffect, useState } from 'react';
import { Card, Dropdown, Form } from 'react-bootstrap';
import EmojiPicker from 'components/base/EmojiPicker';
import Message from './Message';
import { useChatContext } from 'providers/ChatProvider';
import classNames from 'classnames';
import PhoenixOffcanvas, {
  PhoenixOffcanvasContainer
} from 'components/base/PhoenixOffcanvas';
import ConversationDetails from './conversation-details/ConversationDetails';
import ChatSidebar from './ChatSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const ChatContent = () => {
  const {
    currentConversation,
    chatDispatch,
    showConversationDetails,
    showUserListOffcanvas,
    setShowConversationDetails,
    setShowUserListOffcanvas
  } = useChatContext();
  const [messageText, setMessageText] = useState('');

  const { breakpoints } = useBreakpoints();

  useEffect(() => {
    chatDispatch({
      type: 'SET_CHAT_STATE',
      payload: {
        showConversationDetails: false,
        showUserListOffcanvas: false
      }
    });
  }, [currentConversation]);

  if (currentConversation) {
    return (
      <Card as={PhoenixOffcanvasContainer} className="h-100 w-100">
        <Card.Header className="p-3 p-md-4 d-flex flex-between-center">
          <div className="d-flex align-items-center">
            <Button
              className="ps-0 pe-2 text-700 d-sm-none"
              onClick={() => setShowUserListOffcanvas(true)}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </Button>
            <div className="d-flex flex-column flex-md-row align-items-md-center">
              <Button
                className="fs-7 fw-semi-bold text-1100 d-flex align-items-center p-0 me-3 text-start"
                onClick={() => setShowConversationDetails(true)}
              >
                <span className="line-clamp-1">
                  {currentConversation.user.name}
                </span>
                <FontAwesomeIcon icon="chevron-down" className="ms-2 fs-10" />
              </Button>
              <p className="fs-9 mb-0 me-2">
                <FontAwesomeIcon
                  icon="circle"
                  className={classNames('fs-11 me-2', {
                    'text-success':
                      currentConversation.user.status === 'online',
                    'text-300': currentConversation.user.status === 'offline'
                  })}
                />
                {currentConversation.user.status === 'online'
                  ? 'Active now'
                  : 'Offline'}
              </p>
            </div>
          </div>
          <div className="d-flex">
            <Button variant="primary" className="btn-icon me-1">
              <FontAwesomeIcon icon="phone" />
            </Button>
            <Button variant="primary" className="btn-icon me-1">
              <FontAwesomeIcon icon="video" />
            </Button>

            <Dropdown>
              <Dropdown.Toggle
                variant="phoenix-primary"
                className="btn-icon dropdown-caret-none"
              >
                <FontAwesomeIcon icon="ellipsis-vertical" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="py-2">
                <Dropdown.Item href="#/action-1">
                  Add to favourites
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">View profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Manage notifications
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Header>
        <Card.Body className="p-3 p-sm-4 scrollbar d-flex flex-column gap-2">
          {currentConversation.messages.length === 0 && (
            <div className="d-flex align-items-end justify-content-center text-center h-100">
              <div>
                This is the beginning of your private chat with{' '}
                <a href="#!" className="fw-semi-bold">
                  {currentConversation.user.name}
                </a>
                . You have 237 mutual connections.
                <br />
                Say Hi to your new friend now
                <span className="fa-solid fa-paper-plane text-primary ms-1"></span>
              </div>
            </div>
          )}
          {currentConversation.messages.map(message => (
            <Message
              message={message}
              user={currentConversation.user}
              key={message.id}
            />
          ))}
        </Card.Body>

        <Card.Footer>
          <Form.Control
            type="textarea"
            className="chat-textarea outline-none border-0 scrollbar mb-1 p-0 fs-8"
            placeholder="Type your message..."
            onChange={({ target: { value } }) => setMessageText(value)}
            value={messageText}
          />

          <div className="d-flex gap-3 align-items-center">
            {/* <Picker set="google" onEmojiSelect={console.log} theme="light" /> */}
            <EmojiPicker
              onSelect={selection => {
                console.log({ messageText });

                setMessageText(messageText + selection.emoji);
                console.log(selection.emoji);
              }}
            >
              <Button
                variant="link"
                className="py-0 ps-0 pe-2 text-900 fs-9 btn-emoji"
              >
                <FontAwesomeIcon icon={['far', 'face-smile']} />
              </Button>
            </EmojiPicker>
            <div>
              <Button className="p-0">
                <label
                  className="text-900 fs-9 cursor-pointer"
                  htmlFor="images"
                >
                  <FontAwesomeIcon icon="image" />
                </label>
              </Button>
              <Form.Control
                className="d-none"
                type="file"
                accept="image/*"
                id="images"
              />
            </div>
            <div>
              <Button className="p-0">
                <label
                  className="text-900 fs-9 cursor-pointer"
                  htmlFor="attachments"
                >
                  <FontAwesomeIcon icon="paperclip" />
                </label>
              </Button>
              <Form.Control className="d-none" type="file" id="attachments" />
            </div>

            <Button className="p-0 text-900 fs-9">
              <FontAwesomeIcon icon="microphone" />
            </Button>
            <Button className="p-0 text-900 fs-9">
              <FontAwesomeIcon icon="ellipsis" />
            </Button>

            <Button
              variant="primary"
              endIcon={<FontAwesomeIcon icon="paper-plane" className="ms-2" />}
              className="ms-auto"
              type="submit"
            >
              Send
            </Button>
          </div>
        </Card.Footer>
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
    return <></>;
  }
};

export default ChatContent;
