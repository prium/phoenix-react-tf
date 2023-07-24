import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import RevealDropdown from 'components/base/RevealDropdown';
import { Notification } from 'data/notifications';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

export interface NotificationItemProps {
  notification: Notification;
  className?: string;
  type: 'dropdownItem' | 'pageItem';
}

const NotificationItem = ({
  notification,
  className,
  type
}: NotificationItemProps) => {
  return (
    <div
      className={classNames(
        className,
        'p-3 border-300 notification-card position-relative',
        {
          unread: !notification.read,
          'px-4 px-lg-6': type === 'pageItem'
        }
      )}
    >
      <div className="d-flex align-items-center justify-content-between position-relative">
        <div className="d-flex">
          <Avatar
            src={notification.avatar}
            placeholder={!notification.avatar}
            size={type === 'pageItem' ? 'xl' : 'm'}
            className="me-3"
          />
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-black">{notification.name}</h4>
            <p className="fs-9 text-1000 mb-2 mb-sm-3">
              <span className="me-1">{notification.interactionIcon}</span>
              <span>{notification.interaction}</span>
              {type === 'pageItem' && (
                <span className="fw-bold">{notification.detail}</span>
              )}

              <span className="ms-2 text-600 fw-bold fs-10">
                {notification.ago}
              </span>
            </p>
            <p className="text-800 fs-9 mb-0">
              <FontAwesomeIcon icon="clock" className="me-1" />
              <span className="fw-bold">{notification.time}</span>
              {notification.date}
            </p>
          </div>
        </div>
        <RevealDropdown
          className="position-static"
          btnClassName="notification-dropdown-toggle"
        >
          <Dropdown.Item>
            Mark as {notification.read ? 'unread' : 'read'}
          </Dropdown.Item>
        </RevealDropdown>
      </div>
    </div>
  );
};

export default NotificationItem;
