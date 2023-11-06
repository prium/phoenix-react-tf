import Avatar from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { suggestions } from 'data/chat';
import Button from 'components/base/Button';
import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import MessageAttachments from './MessageAttachments';

const Message = () => {
  const { conversation, sentMessage } = useChatWidgetContext();
  return (
    <>
      {!conversation.messages.length && (
        <div className="text-end mt-6">
          {suggestions.map((message, index) => (
            <Button
              key={message}
              onClick={() => sentMessage(message)}
              className={classNames(
                'd-inline-flex align-items-center text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3 lh-base',
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
                  'flex-end-center': message.type === 'sent',
                  'me-2': message.type === 'sent' && !message.attachments
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
                  className={classNames('mb-1', {
                    'received-message-content border me-5':
                      message.type === 'received',
                    'sent-message-content light ms-5 text-end':
                      message.type === 'sent',
                    attachments: message.attachments && !message.message
                  })}
                >
                  {message.message && <p className="mb-0">{message.message}</p>}
                  {message.attachments && (
                    <MessageAttachments attachments={message.attachments} />
                  )}
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
        <Avatar
          src={conversation.user.avatar}
          size="3xl"
          status="online"
          className="mx-auto border border-3 border-white"
        />
        <h5 className="mt-2 mb-3">Eric</h5>
        <p className="text-center text-black mb-0">
          Ask us anything – we’ll get back to you here or by email within 24
          hours.
        </p>
      </div>
    </>
  );
};

export default Message;
