import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import { ChatThread, threads } from 'data/chat';
import { useChatContext } from 'providers/ChatProvider';
import React, { useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UserListitem = ({ thread }: { thread: ChatThread }) => {
  const { currentThread } = useChatContext();

  const lastMessage = useMemo(
    () => thread.messages[thread.messages.length - 1],
    [thread]
  );
  const unseenMessageCount = useMemo(
    () => thread.messages.filter(message => !message.seen).length,
    [thread]
  );

  return (
    <Nav.Item key={thread.id} className={lastMessage.seen ? 'read' : 'unread'}>
      <Nav.Link
        as={Link}
        to={`/apps/chat/${thread.user.id}/conversation`}
        className={classNames(
          'd-flex align-items-center justify-content-center p-2',
          {
            unread: !lastMessage.seen,
            active: currentThread?.user.id === thread.user.id
          }
        )}
      >
        <div className="position-relative me-2 me-sm-0 me-xl-2">
          <Avatar
            src={thread.user.avatar}
            size="xl"
            // status="online"
            className="d-block"
            imageClassName="border border-2 border-white"
          />
          {unseenMessageCount > 0 && (
            <span
              className="bg-primary rounded-circle top-0 end-0 position-absolute text-white d-flex flex-center fs-10 fw-semi-bold d-none d-sm-flex d-xl-none lh-1"
              style={{ height: '1rem', width: '1rem' }}
            >
              {unseenMessageCount}
            </span>
          )}
        </div>
        <div className="flex-1 d-sm-none d-xl-block">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-900 fw-normal name text-nowrap">
              {thread.user.name}
            </h5>
            <p className="fs-10 text-600 mb-0 text-nowrap">
              {lastMessage.time}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fs-9 mb-0 line-clamp-1 text-600 message">
              {lastMessage.message}
            </p>
            {unseenMessageCount > 0 && (
              <Badge
                variant="phoenix"
                bg="primary"
                className="px-1 unread-badge ms-1"
              >
                {unseenMessageCount}
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
