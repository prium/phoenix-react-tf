import Avatar from 'components/base/Avatar';
import { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scrollbar from 'components/base/Scrollbar';
import Button from 'components/base/Button';
import team30 from 'assets/img/team/40x40/30.webp';
import team57 from 'assets/img/team/40x40/57.webp';
import team59 from 'assets/img/team/40x40/59.webp';
import team58 from 'assets/img/team/40x40/58.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const NotificationDropdownMenu = () => {
  const [notifications] = useState([
    {
      id: '1',
      avatar: team30,
      name: 'Jessie Samson',
      textIcon: '💬',
      text: 'Mentioned you in a comment.',
      ago: '10m',
      icon: 'clock',
      time: '10:41 AM ',
      date: 'August 7,2021',
      read: true
    },
    {
      id: '2',
      name: 'Jane Foster',
      textIcon: '📅',
      text: 'Created an event.',
      ago: '20m',
      icon: 'clock',
      time: '10:20 AM ',
      date: 'August 7,2021',
      read: false
    },
    {
      id: '3',
      placeholder: true,
      name: 'Jessie Samson',
      textIcon: '👍',
      text: 'Liked your comment.',
      ago: '1h',
      icon: 'clock',
      time: '9:30 AM ',
      date: 'August 7,2021',
      read: false
    },
    {
      id: '4',
      avatar: team57,
      name: 'Kiera Anderson',
      textIcon: '💬',
      text: 'Mentioned you in a comment.',
      ago: '',
      icon: 'fas fa-clock',
      time: '9:11 AM ',
      date: 'August 7,2021',
      read: false
    },
    {
      id: '5',
      avatar: team59,
      name: 'Herman Carter',
      textIcon: '👤',
      text: 'Tagged you in a comment.',
      ago: '',
      icon: 'fas fa-clock',
      time: '10:58 PM ',
      date: 'August 7,2021',
      read: false
    },
    {
      id: '6',
      avatar: team58,
      name: 'Benjamin Button',
      textIcon: '👍',
      text: 'Liked your comment.',
      ago: '',
      icon: 'fas fa-clock',
      time: '10:18 AM ',
      date: 'August 7,2021',
      read: true
    }
  ]);
  return (
    <Dropdown.Menu
      align="end"
      className="navbar-dropdown-caret py-0 notification-dropdown-menu shadow border border-300"
    >
      <Card className="position-relative border-0">
        <Card.Header className="p-2">
          <div className="d-flex justify-content-between">
            <h5 className="text-black mb-0">Notifications</h5>
            <Button variant="link" className="p-0 fs--1 fw-normal">
              Mark all as read
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0" style={{ height: '27rem' }}>
          <Scrollbar>
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={classNames('p-3 border-300 notification-card position-relative', {
                  'border-bottom': index !== notifications.length - 1,
                  unread: !notification.read
                })}
              >
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <Avatar
                      src={notification.avatar}
                      placeholder={!notification.avatar}
                      size="m"
                      className="me-3"
                    />
                    <div className="me-3 flex-1">
                      <h4 className="fs--1 text-black">{notification.name}</h4>
                      <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs--2">{notification.textIcon}</span>
                        {notification.text}
                        <span className="ms-2 text-400 fw-bold fs--2">{notification.ago}</span>
                      </p>
                      <p className="text-800 fs--1 mb-0">
                        <FontAwesomeIcon icon="clock" className="me-1" />
                        <span className="fw-bold">{notification.time}</span>
                        {notification.date}
                      </p>
                    </div>
                  </div>
                  <Dropdown className="btn-reveal-trig]ger">
                    <Dropdown.Toggle
                      variant=""
                      size="sm"
                      className="dropdown-caret-none notification-dropdown-toggle fs--2"
                    >
                      <FontAwesomeIcon icon="ellipsis" className="fs--2" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ))}
          </Scrollbar>
        </Card.Body>
        <Card.Footer className="p-0 border-top">
          <div className="my-2 text-center fw-bold fs--2 text-600">
            <Link to="#!" className="fw-bolder">
              Notification history
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default NotificationDropdownMenu;
