import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import { ChatThread, threads } from 'data/chat';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserListitem = ({ thread }: { thread: ChatThread }) => {
  return (
    <Nav.Item key={thread.id} className={thread.unread ? 'unread' : 'read'}>
      <Nav.Link
        as={Link}
        to="#!"
        className={classNames(
          'd-flex align-items-center justify-content-center p-2',
          {
            unread: thread.unread,
            active: thread.name === 'Sharuka Nijibum'
          }
        )}
      >
        <div className="position-relative me-2 me-sm-0 me-xl-2">
          <Avatar
            src={thread.avatar}
            size="xl"
            // status="online"
            className="d-block"
            imageClassName="border border-2 border-white"
          />
          {thread.badge && (
            <span
              className="bg-primary rounded-circle top-0 end-0 position-absolute text-white d-flex flex-center fs-10 fw-semi-bold d-none d-sm-flex d-xl-none lh-1"
              style={{ height: '1rem', width: '1rem' }}
            >
              {thread.badge}
            </span>
          )}
        </div>
        <div className="flex-1 d-sm-none d-xl-block">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-900 fw-normal name text-nowrap">
              {thread.name}
            </h5>
            <p className="fs-10 text-600 mb-0 text-nowrap">{thread.time}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fs-9 mb-0 line-clamp-1 text-600 message">
              {thread.message}
            </p>
            {thread.badge && (
              <Badge variant="phoenix" className="px-1 unread-badge">
                {thread.badge}
              </Badge>
            )}
          </div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const UserList = () => {
  return (
    <div className="scrollbar">
      <Nav className="chat-thread-tab flex-column">
        {threads.map(thread => (
          <UserListitem thread={thread} key={thread.id} />
        ))}
      </Nav>
    </div>
  );
};

export default UserList;
