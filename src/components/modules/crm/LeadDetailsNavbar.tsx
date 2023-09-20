import { Nav } from 'react-bootstrap';

const LeadDetailsNavbar = () => {
  return (
    <div className="pt-3 pb-4 px-0 sticky-top bg-soft nav-underline-scrollspy z-index-5">
      <Nav className="nav-underline">
        <Nav.Item>
          <Nav.Link className="pt-0" href="#tasks" data-to-scrollspy-id="tasks">
            Tasks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="pt-0" href="#deals" data-to-scrollspy-id="deals">
            Deals
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="pt-0"
            href="#emails"
            data-to-scrollspy-id="emails"
          >
            Emails
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="pt-0"
            href="#attachments"
            data-to-scrollspy-id="attachments"
          >
            Attachments
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default LeadDetailsNavbar;
