import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { threads } from 'data/chat';
import React from 'react';
import { Card, Dropdown, Form } from 'react-bootstrap';

const ChatContent = () => {
  const thread = threads[0];
  return (
    <Card className="h-100 w-100">
      <Card.Header className="p-3 p-md-4 d-flex flex-between-center">
        <div className="d-flex align-items-center">
          <Button className="ps-0 pe-2 text-700 d-sm-none">
            <FontAwesomeIcon icon="chevron-left" />
          </Button>
          <div className="d-flex flex-column flex-md-row align-items-md-center">
            <Button className="btn fs-7 fw-semi-bold text-1100 d-flex align-items-center p-0 me-3 text-start">
              <span className="line-clamp-1">Sharuka Nijibum</span>
              <FontAwesomeIcon icon="chevron-down" className="ms-2 fs-10" />
            </Button>
            <p className="fs-9 mb-0 me-2">
              <FontAwesomeIcon
                icon="circle"
                className="text-success fs-11 me-2"
              />
              Active now
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
              <Dropdown.Item href="#/action-1">Add to favourites</Dropdown.Item>
              <Dropdown.Item href="#/action-2">View profile</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Manage notifications
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body></Card.Body>

      <Card.Footer>
        <div
          className="chat-textarea outline-none scrollbar mb-1"
          contentEditable={true}
          placeholder="Type your message..."
        />
        <div className="d-flex gap-3 align-items-center">
          <Button
            variant="link"
            className="py-0 ps-0 pe-2 text-900 fs-9 btn-emoji"
          >
            <FontAwesomeIcon icon={['far', 'face-smile']} />
          </Button>
          <div>
            <Button className="p-0">
              <label className="text-900 fs-9 cursor-pointer" htmlFor="images">
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
    </Card>
  );
};

export default ChatContent;
