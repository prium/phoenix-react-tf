import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import {
  SidebarItem,
  filteredItems,
  labelItems,
  mailboxItems
} from 'data/email';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmailSidebarItem = ({ item }: { item: SidebarItem }) => {
  return (
    <Nav.Item>
      <Nav.Link
        as={Link}
        className={classNames(
          'nav-link py-2 ps-0 pe-3 border-end border-bottom text-start outline-none',
          {
            active: item.active
          }
        )}
        to={item.link ? item.link : '#!'}
      >
        <div className="d-flex gap-2 align-items-center">
          {item.icon}
          <span className="flex-1">{item.label}</span>
          {item.count && <span className="nav-item-count">{item.count}</span>}
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const EmailSidebar = () => {
  return (
    <div>
      <div className="email-content scrollbar">
        <div className="d-flex mb-2">
          <p className="text-uppercase fs-10 text-600 mb-0 fw-bold">Mailbox</p>
          <button
            className="btn d-lg-none p-0 mb-2"
            data-phoenix-dismiss="offcanvas"
          >
            <span className="uil uil-times fs-8"></span>
          </button>
        </div>

        <Nav className="flex-column border-top fs-9 vertical-nav mb-4">
          {mailboxItems.map(item => (
            <EmailSidebarItem item={item} key={item.label} />
          ))}
        </Nav>

        <div className="d-flex flex-between-center mb-2">
          <p className="text-uppercase fs-10 text-600 mb-0 fw-bold">Filtered</p>
          <Button
            variant="link"
            className="fs-10 fw-bold p-0"
            startIcon={<FontAwesomeIcon icon="plus" className="me-2" />}
          >
            Add Folder
          </Button>
        </div>

        <Nav className="flex-column border-top fs-9 vertical-nav mb-4">
          {filteredItems.map(item => (
            <EmailSidebarItem item={item} key={item.label} />
          ))}
        </Nav>

        <div className="d-flex flex-between-center mb-2">
          <p className="text-uppercase fs-10 text-600 mb-0 fw-bold">Labels</p>
          <Button
            variant="link"
            className="fs-10 fw-bold p-0"
            startIcon={<FontAwesomeIcon icon="plus" className="me-2" />}
          >
            Add Label
          </Button>
        </div>

        <Nav className="flex-column border-top fs-9 vertical-nav">
          {labelItems.map(item => (
            <EmailSidebarItem item={item} key={item.label} />
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default EmailSidebar;
