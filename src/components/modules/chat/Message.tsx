import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import Lightbox from 'components/base/LightBox';
import { Message as MessageType, User } from 'data/chat';
import useLightbox from 'hooks/useLightbox';
import React from 'react';
import { Col, ColProps, Row } from 'react-bootstrap';

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

const Attachments = ({
  attachments,
  openLightbox
}: {
  attachments: string[];
  openLightbox: (slideIndex: number) => void;
}) => {
  const spans = () => {
    if (attachments.length > 3) {
      return {
        xs: 6,
        md: 4,
        xl: 3
      };
    }
    if (attachments.length === 2) {
      return {
        xs: 6
      };
    }
    if (attachments.length === 1) {
      return {
        xs: 'auto'
      };
    }
  };
  return (
    <Row className={classNames('g-2 mt-0')}>
      {attachments.map((attachment, index) => (
        <Col {...(spans() as ColProps)} key={attachment}>
          <img
            src={attachment}
            alt=""
            className="rounded-2 fit-cover cursor-pointer"
            onClick={() => {
              openLightbox(index + 1);
            }}
          />
        </Col>
      ))}
    </Row>
  );
};

const Message = ({ message, user }: { message: MessageType; user: User }) => {
  const { lightboxProps, openLightbox } = useLightbox(
    message.attachments || []
  );
  return (
    <div className="d-flex chat-message">
      <div
        className={classNames('d-flex flex-1', {
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
                // 'w-min-content': message.attachments?.length,
                received: message.type === 'received'
              })}
            >
              <div
                className={classNames('mb-1', {
                  'sent-message-content light': message.type === 'sent',
                  'received-message-content border':
                    message.type === 'received',
                  attachments: message.attachments && !message.message
                })}
              >
                {message.message && <p className="mb-0">{message.message}</p>}
                {message.attachments && (
                  <Attachments
                    attachments={message.attachments}
                    openLightbox={openLightbox}
                  />
                )}
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
          <Lightbox {...lightboxProps} />
        </div>
      </div>
    </div>
  );
};

export default Message;
