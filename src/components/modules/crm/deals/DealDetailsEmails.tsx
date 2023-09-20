import SearchBox from 'components/common/SearchBox';
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';

const DealDetailsEmails = () => {
  return (
    <>
      <h2 className="mb-4">Emails</h2>
      <Tab.Container>
        <Nav variant="underline" className="flex-nowrap mb-1">
          <Nav.Item>
            <Nav.Link eventKey="all-mails" className="text-nowrap border-0">
              Mails (68)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="drafts" className="text-nowrap border-0">
              Drafts (6)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="scheduled" className="text-nowrap border-0">
              Scheduled (17)
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <SearchBox placeholder="Search..." className="w-100 mb-3" />
      </Tab.Container>
    </>
  );
};

export default DealDetailsEmails;
