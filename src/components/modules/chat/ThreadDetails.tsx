// @ts-ignore

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { ChatThread } from 'data/chat';
import React, { PropsWithChildren } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ActionButton = ({
  icon,
  children
}: PropsWithChildren<{ icon: IconProp }>) => (
  <div>
    <Button className="p-0 fw-semi-bold d-block">
      <FontAwesomeIcon icon={icon} className="me-3" />
      {children}
    </Button>
  </div>
);

const ThreadDetails = ({
  thread,
  handleClose
}: {
  thread: ChatThread;
  handleClose: () => void;
}) => {
  return (
    <>
      <div className="border-bottom p-4">
        <div className="d-flex flex-between-center">
          <Button className="p-0" onClick={handleClose}>
            <FontAwesomeIcon icon="chevron-left" className="text-700" />
          </Button>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant=""
              size="sm"
              className="p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
            >
              <FontAwesomeIcon icon="ellipsis-v" className="text-700" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="py-2">
              <ActionDropdownItems />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex flex-column align-items-center text-center">
          <Avatar src={thread.user.avatar} size="4xl" className="mb-2" />
          <h4 className="fw-semi-bold mb-3">{thread.user.name}</h4>
          <div className="d-flex">
            <Button className="btn-primary btn-icon fs--2 me-1">
              <FontAwesomeIcon icon="phone" />
            </Button>
            <Button className="btn-primary btn-icon fs--2 me-1">
              <FontAwesomeIcon icon="video" />
            </Button>
            <Button className="btn-phoenix-secondary btn-icon fs--2">
              <FontAwesomeIcon icon="search" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 px-sm-5 d-flex flex-column gap-3 scrollbar">
        <ActionButton icon="user-pen">Nickname</ActionButton>
        <ActionButton icon="palette">Change Color</ActionButton>
        <ActionButton icon="user-plus">Create Group Chat</ActionButton>
        <ActionButton icon="bell-slash">Mute Conversation</ActionButton>
        <ActionButton icon="gear">Manage Settings</ActionButton>
        <ActionButton icon="hand-holding-heart">Get help</ActionButton>
        <ActionButton icon="flag">Report Account</ActionButton>
        <ActionButton icon="ban">Block Account</ActionButton>
      </div>
      {/* button.btn.d-block.p-0.fw-semi-bold.mb-3 span.fa-solid.fa-user-pen.me-3 */}
    </>
  );
};

export default ThreadDetails;
