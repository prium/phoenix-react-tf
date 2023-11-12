import Scrollbar from 'components/base/Scrollbar';
import React from 'react';
import { Nav } from 'react-bootstrap';

const WidgetsScrollspyNav = () => {
  return (
    <div className="widgets-scrollspy-nav mt-n5 bg-white z-index-5 mx-n4 mx-lg-n6 border-bottom border-300">
      <Scrollbar autoHeight>
        <Nav className="px-4 flex-nowrap">
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#scrollspyStats"
              data-to-scrollspy-id="scrollspyStats"
            >
              Number Stats and Charts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#scrollspyTables"
              data-to-scrollspy-id="scrollspyTables"
            >
              Tables, Files, and Lists
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#scrollspyEcommerce"
              data-to-scrollspy-id="scrollspyEcommerce"
            >
              E-commerce
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#scrollspyUsers"
              data-to-scrollspy-id="scrollspyUsers"
            >
              Users & Feed
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#scrollspyForms"
              data-to-scrollspy-id="scrollspyForms"
            >
              Forms
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#scrollspyOthers"
              data-to-scrollspy-id="scrollspyOthers"
            >
              Others
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Scrollbar>
    </div>
  );
};

export default WidgetsScrollspyNav;
