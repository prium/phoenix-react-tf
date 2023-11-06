import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import { ChangeEvent } from 'react';
import ImageAttachmentPreview from '../ImageAttachmentPreview';
import classNames from 'classnames';
import { convertFileToAttachment } from 'helpers/utils';
import AttachmentPreview from '../AttachmentPreview';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';

const ChatWidgetFooter = () => {
  const {
    fileAttachment,
    setFileAttachment,
    imageAttachments,
    setImageAttachments,
    setMessageText,
    messageText,
    sentMessage
  } = useChatWidgetContext();
  return (
    <>
      {fileAttachment && (
        <div className={classNames({ 'mb-2': fileAttachment })}>
          <AttachmentPreview
            attachment={convertFileToAttachment(fileAttachment)}
            size="xl"
            handleRemove={() => setFileAttachment(null)}
          />
        </div>
      )}

      {imageAttachments && (
        <div
          className={classNames('d-flex gap-2', {
            'mb-2': imageAttachments.length
          })}
        >
          {imageAttachments.map((attachment, index) => (
            <ImageAttachmentPreview
              key={index}
              image={URL.createObjectURL(attachment)}
              handleClose={() => {
                setImageAttachments(
                  imageAttachments.filter((_, i) => index !== i)
                );
              }}
            />
          ))}
        </div>
      )}
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center flex-1 gap-3 border rounded-pill px-4">
          <Form.Control
            className="outline-none border-0 flex-1 fs--1 px-0"
            type="text"
            placeholder="Write message"
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
          />
          <div>
            <Button className="p-0">
              <label
                className="text-500 fs-9 cursor-pointer"
                htmlFor="widgetImages"
              >
                <FontAwesomeIcon icon={faImage} transform="down-1" />
              </label>
            </Button>
            <Form.Control
              className="d-none"
              type="file"
              accept="image/*"
              id="widgetImages"
              multiple
              onChange={({
                target: { files }
              }: ChangeEvent<HTMLInputElement>) =>
                files && setImageAttachments(Array.from(files))
              }
            />
          </div>
          <div>
            <Button className="p-0">
              <label
                className="text-500 fs-9 cursor-pointer"
                htmlFor="widgetAttachments"
              >
                <FontAwesomeIcon icon={faPaperclip} transform="down-1" />
              </label>
            </Button>
            <Form.Control
              className="d-none"
              type="file"
              id="widgetAttachments"
              onChange={({
                target: { files }
              }: ChangeEvent<HTMLInputElement>) =>
                files && setFileAttachment(files[0])
              }
            />
          </div>
        </div>
        <Button className="p-0 border-0 send-btn" onClick={() => sentMessage()}>
          <FontAwesomeIcon icon={faPaperPlane} className="fs-9" />
        </Button>
      </div>
    </>
  );
};

export default ChatWidgetFooter;
