import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import EmojiPicker from 'components/base/EmojiPicker';
import { useChatContext } from 'providers/ChatProvider';
import ReactTextareaAutosize from 'react-textarea-autosize';

const ChatContentFooter = () => {
  const { currentConversation, chatDispatch } = useChatContext();

  const [messageText, setMessageText] = useState('');

  const sentMessage = () => {
    if (currentConversation) {
      chatDispatch({
        type: 'SENT_MESSAGE',
        payload: {
          conversationId: currentConversation.id,
          message: messageText
        }
      });
      setMessageText('');
    }
  };

  return (
    <Card.Footer>
      <ReactTextareaAutosize
        minRows={1}
        maxRows={6}
        value={messageText}
        placeholder="Type your message..."
        onChange={({ target: { value } }) => setMessageText(value)}
        className="chat-textarea form-control outline-none border-0 scrollbar resize-none mb-1 p-0 fs-8"
      />

      <div className="d-flex gap-3 align-items-center">
        <EmojiPicker
          onSelect={selection => {
            setMessageText(messageText => messageText + selection.emoji);
          }}
        >
          <Button
            variant="link"
            className="py-0 ps-0 pe-2 text-900 fs-9 btn-emoji"
          >
            <FontAwesomeIcon icon={['far', 'face-smile']} />
          </Button>
        </EmojiPicker>
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
          onClick={sentMessage}
        >
          Send
        </Button>
      </div>
    </Card.Footer>
  );
};

export default ChatContentFooter;
