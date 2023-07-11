import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import { Message as MessageType, User } from 'data/chat';
import React from 'react';

type MessageActionType = {
  icon: IconProp;
  label: string;
};

const actions: MessageActionType[] = [
  {
    icon: 'trash',
    label: 'Delete'
  },
  {
    icon: 'reply',
    label: 'Reply'
  },
  {
    icon: 'pen-to-square',
    label: 'Edit'
  },
  {
    icon: 'share',
    label: 'Share'
  },
  {
    icon: 'face-smile',
    label: 'Emoji'
  }
];

const ActionButtons = ({
  actions,
  variant
}: {
  actions: MessageActionType[];
  variant: 'sent' | 'received';
}) => {
  return (
    <>
      <div className="d-sm-none hover-actions align-self-center me-2 start-0">
        <div className="bg-white rounded-pill d-flex align-items-center border border-300 px-2 actions">
          {actions.map(action => (
            <Button key={action.label} className="btn p-2" type="button">
              <FontAwesomeIcon
                icon={action.icon as IconProp}
                className={classNames({
                  'text-primary': variant === 'sent'
                })}
              />
            </Button>
          ))}
        </div>
      </div>
      <div className="d-none d-sm-flex">
        <div className="hover-actions position-relative align-self-center">
          {actions.map(action => (
            <Button key={action.label} className="fs-10 p-2" type="button">
              <FontAwesomeIcon
                icon={action.icon as IconProp}
                className={classNames({
                  'text-primary': variant === 'sent'
                })}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

const Message = ({ message, user }: { message: MessageType; user: User }) => {
  return (
    <div className="d-flex chat-message">
      <div
        className={classNames('d-flex mb-2 flex-1', {
          'justify-content-end': message.type === 'sent'
        })}
      >
        <div className="w-100 w-xxl-75">
          <div
            className={classNames('d-flex hover-actions-trigger', {
              'flex-end-center': message.type === 'sent'
            })}
          >
            {message.type === 'received' && (
              <Avatar
                src={user.avatar}
                size="m"
                className="me-3 flex-shrink-0"
              />
            )}

            {message.type === 'sent' && (
              <ActionButtons actions={actions} variant="sent" />
            )}

            <div
              className={classNames('chat-message-content me-2', {
                'w-min-contnet': true,
                received: message.type === 'received'
              })}
            >
              <div
                className={classNames('mb-1', {
                  'sent-message-content light': message.type === 'sent',
                  'received-message-content border': message.type === 'received'
                })}
              >
                <p className="mb-0">{message.message}</p>
                {/* {message.attachment &&
                  message.attachment.type === 'gallery' && (
                    <Gallery
                      attachments={message.attachment.attachments}
                      threadId={threadId}
                    />
                  )}
                {message.attachment && message.attachment.type === 'image' && (
                  <a
                    href={message.attachment.attachment}
                    data-gallery={`gallery-${threadId}`}
                  >
                    <img
                      className="rounded-2 fit-cover mt-1"
                      src={message.attachment.attachment}
                      alt=""
                      style={{ maxWidth: '200px' }}
                    />
                  </a>
                )} */}
              </div>
            </div>
            {message.type === 'received' && (
              <ActionButtons actions={actions.slice(1)} variant="received" />
            )}
          </div>
          <div
            className={classNames({
              'ms-7': message.type === 'received',
              'text-end': message.type === 'sent'
            })}
          >
            <p className="mb-0 fs-10 text-600 fw-semi-bold">{message.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
