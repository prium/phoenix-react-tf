import Avatar from 'components/base/Avatar';
import team22 from 'assets/img/team/22.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Conversation, Message as MessageType, suggestions } from 'data/chat';
import Button from 'components/base/Button';
import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';

const Message = ({
  conversation,
  setConversation
}: {
  conversation: Conversation;
  setConversation: Dispatch<SetStateAction<Conversation>>;
}) => {
  const sentMessage = (test: string) => {
    const newMessages = [
      {
        id: Date.now(),
        type: 'sent',
        time: dayjs().toNow(),
        readAt: null,
        message: test
      } as MessageType,
      ...conversation.messages
    ];
    const newConversation = { ...conversation, messages: newMessages };
    setConversation(newConversation);
  };
  return (
    <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
      {!conversation.messages.length && (
        <div className="text-end mt-6">
          {suggestions.map((message, index) => (
            <Button
              key={message}
              onClick={() => sentMessage(message)}
              className={classNames(
                'd-inline-flex align-items-center text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3',
                { 'mb-2': index !== suggestions.length - 1 }
              )}
            >
              <p className="mb-0 fw-semi-bold fs-9">{message}</p>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-primary fs-9 ms-3"
              />
            </Button>
          ))}
        </div>
      )}
      {conversation.messages.length > 0 && (
        <div className="d-flex flex-column-reverse">
          {conversation.messages.map(message => (
            <div key={message.id} className="chat-message mb-2">
              <div
                className={classNames('d-flex', {
                  'flex-end-center me-3': message.type === 'sent'
                })}
              >
                {message.type === 'received' && (
                  <Avatar
                    src={conversation.user.avatar}
                    size="m"
                    className="me-3 flex-shrink-0"
                  />
                )}
                <div
                  className={classNames('mb-1 rounded-2 p-3', {
                    'received-message-content bg-white border':
                      message.type === 'received',
                    'sent-message-content light bg-primary text-white':
                      message.type === 'sent' && message.message,
                    attachments: message.attachments && !message.message
                  })}
                >
                  {message.message && <p className="mb-0">{message.message}</p>}
                </div>
              </div>
              <div
                className={classNames({
                  'd-flex align-items-center justify-content-end gap-1':
                    message.type === 'sent'
                })}
              >
                <p
                  className={classNames('mb-0 fs-10 text-600 fw-semi-bold', {
                    'ms-7': message.type === 'received'
                  })}
                >
                  {message.time}
                </p>
                {message.seen && (
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className="text-success fs-11"
                  />
                )}
              </div>
            </div>
          ))}
          <hr className="my-4 border-dashed border-top border-300" />
        </div>
      )}
      <div className="text-center mt-auto">
        <Avatar src={team22} size="3xl" status="online" className="mx-auto" />
        <h5 className="mt-2 mb-3">Eric</h5>
        <p className="text-center text-black mb-0">
          Ask us anything – we’ll get back to you here or by email within 24
          hours.
        </p>
      </div>
    </div>
  );
};

export default Message;
