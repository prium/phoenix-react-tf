import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Card, Form, Nav, Tab, Tabs } from 'react-bootstrap';
import UserList from './UserList';

const ChatSidebar = () => {
  return (
    <Card className="chat-sidebar">
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
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="read">Read</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unread">Unread</Nav.Link>
          </Nav.Item>
        </Nav>
        <UserList />
      </Tab.Container>
    </Card>
  );
};

export default ChatSidebar;
