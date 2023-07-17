import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { useEffect, useState } from 'react';
import { Card, Dropdown, Form, Nav, Tab } from 'react-bootstrap';
import UserList from './UserList';
import { ConversationFilterType, useChatContext } from 'providers/ChatProvider';
import { Conversation } from 'data/chat';
import classNames from 'classnames';

const ChatSidebar = ({ className }: { className?: string }) => {
  const { conversations } = useChatContext();
  const [filteredConversations, setFilteredConversations] = useState<
    Conversation[]
  >([]);

  const filterConversations = (type: ConversationFilterType) => {
    setFilteredConversations(
      conversations.filter(conversation => {
        const hasUnreadMessages = conversation.messages.some(
          message => message.type === 'received' && !message.readAt
        );
        return type === 'read'
          ? !hasUnreadMessages
          : type === 'unread'
          ? hasUnreadMessages
          : true;
      })
    );
  };

  useEffect(() => {
    filterConversations('all');
  }, [conversations]);

  return (
    <Card className={classNames(className, 'chat-sidebar p-3 p-xl-1')}>
      <Button className="d-none d-sm-block d-xl-none mb-2">
        <FontAwesomeIcon icon="magnifying-glass" className="text-600 fs-7" />
      </Button>
      <Dropdown className="d-none d-sm-block d-xl-none mb-5" align="end">
        <Dropdown.Toggle
          variant=""
          size="sm"
          className="w-100 mx-auto dropdown-caret-none"
        >
          <FontAwesomeIcon icon="bars" className="fs-7 text-600" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" className="p-0">
          <Dropdown.Item eventKey="1">All</Dropdown.Item>
          <Dropdown.Item eventKey="2">Read</Dropdown.Item>
          <Dropdown.Item eventKey="3">Unread</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form.Group className="form-icon-container mb-4 d-sm-none d-xl-block">
        <Form.Control
          type="text"
          placeholder="People, Groups and Messages"
          className="form-icon-input"
        />
        <FontAwesomeIcon icon="user" className="text-900 fs-9 form-icon" />
      </Form.Group>

      <Tab.Container defaultActiveKey="all">
        <Nav variant="phoenix-pills" className="mb-5 d-sm-none d-xl-flex">
          <Nav.Item>
            <Nav.Link
              eventKey="all"
              onClick={() => {
                filterConversations('all');
              }}
            >
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="read"
              onClick={() => {
                filterConversations('read');
              }}
            >
              Read
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="unread"
              onClick={() => {
                filterConversations('unread');
              }}
            >
              Unread
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <UserList conversations={filteredConversations} />
      </Tab.Container>
    </Card>
  );
};

export default ChatSidebar;
