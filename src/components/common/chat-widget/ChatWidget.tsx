import {
  faChevronDown,
  faCircle,
  faImage,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Card } from 'react-bootstrap';
import ActionDropdownItems from '../ActionDropdownItems';
import { Form } from 'react-bootstrap';
import Button from 'components/base/Button';
import { useState, ChangeEvent } from 'react';
import classNames from 'classnames';
import ImageAttachmentPreview from '../ImageAttachmentPreview';
import AttachmentPreview from '../AttachmentPreview';
import { convertFileToAttachment } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';

const ChatWidget = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [imageAttachments, setImageAttachments] = useState<File[]>([]);
  const {
    config: { isChatWidgetVisible }
  } = useAppContext();
  return (
    <div
      className={classNames({
        'd-none': !isChatWidgetVisible
      })}
    >
      <div
        className={classNames('container-fluid support-chat', {
          'show-chat': isOpenChat
        })}
      >
        <Card className="bg-white">
          <Card.Header className="d-flex flex-between-center px-4 py-2 border-bottom">
            <h5 className="mb-0 d-flex align-items-center gap-2">
              Demo widget
              <FontAwesomeIcon icon={faCircle} className="text-success fs-11" />
            </h5>
            <RevealDropdownTrigger>
              <RevealDropdown>
                <ActionDropdownItems />
              </RevealDropdown>
            </RevealDropdownTrigger>
          </Card.Header>
          <Card.Body className="p-0 chat"></Card.Body>
          <Card.Footer className="border-top ps-3 pe-4 py-3">
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
              <Button className="p-0 border-0 send-btn">
                <FontAwesomeIcon icon={faPaperPlane} className="fs-9" />
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
      <Button
        className={classNames('p-0 border border-200 btn-support-chat', {
          'btn-chat-close': isOpenChat
        })}
        onClick={() => setIsOpenChat(!isOpenChat)}
      >
        <span className="fs-8 btn-text text-primary text-nowrap">
          Chat demo
        </span>
        <FontAwesomeIcon icon={faCircle} className="text-success fs-9 ms-2" />
        <FontAwesomeIcon icon={faChevronDown} className="text-primary fs-7" />
      </Button>
    </div>
  );
};

export default ChatWidget;
