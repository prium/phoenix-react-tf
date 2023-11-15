import Scrollbar from 'components/base/Scrollbar';
import { Nav } from 'react-bootstrap';

const WidgetsScrollspyNav = () => {
  return (
    <div className="widgets-scrollspy-nav mt-n5 bg-white mx-n4 mx-lg-n6 border-bottom border-300">
      <Scrollbar autoHeight>
        <Nav className="px-4 flex-nowrap">
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#stats"
              data-to-scrollspy-id="stats"
            >
              Number Stats and Charts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#tables"
              data-to-scrollspy-id="tables"
            >
              Tables, Files, and Lists
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#e-commerce"
              data-to-scrollspy-id="e-commerce"
            >
              E-commerce
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#users-and-feed"
              data-to-scrollspy-id="users-and-feed"
            >
              Users & Feed
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#forms"
              data-to-scrollspy-id="forms"
            >
              Forms
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-700 fw-bold p-3 lh-1 text-nowrap fs-8"
              href="#others"
              data-to-scrollspy-id="others"
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
