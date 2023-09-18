import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import AboutLeadCard from 'components/cards/AboutLeadCard';
import LeadAddressCard from 'components/cards/LeadAddressCard';
import LeadProfileCard from 'components/cards/LeadProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import LeadDeals from 'components/modules/crm/LeadDeals';
import Tasks from 'components/modules/crm/Tasks';
import { defaultBreadcrumbItems } from 'data/commonData';
import React from 'react';
import { Col, Dropdown, Nav, Row } from 'react-bootstrap';

const LeadDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />

      <Row className="align-items-center justify-content-between g-3 mb-3">
        <Col xs={12} md="auto">
          <h2 className="mb-0">Lead details</h2>
        </Col>
        <Col xs={12} md="auto">
          <div className="d-flex gap-2">
            <div className="flex-1 d-md-none">
              <Button variant="phoenix-secondary" className="px-3 text-700">
                <span className="fa-solid fa-bars"></span>
              </Button>
            </div>
            <Button
              variant="primary"
              startIcon={<FontAwesomeIcon icon="envelope" className="me-2" />}
            >
              Send an email
            </Button>
            <Button
              variant="phoenix-secondary"
              className="px-3 px-sm-5"
              startIcon={<FontAwesomeIcon icon="thumbtack" className="me-2" />}
            >
              <span className="d-none d-sm-inline">Shortlist</span>
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                variant="phoenix-secondary"
                className="dropdown-caret-none px-3"
              >
                <FontAwesomeIcon icon="ellipsis" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#!">View Profile</Dropdown.Item>
                <Dropdown.Item href="#!">Report</Dropdown.Item>
                <Dropdown.Item href="#!">Manage notifications</Dropdown.Item>
                <Dropdown.Item href="#!" className="text-danger">
                  Delete Lead
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>

      <Row className="g-0 g-md-4 g-xl-6">
        <Col md={5} lg={5} xl={4}>
          <div className="sticky-leads-sidebar">
            <div className="lead-details-offcanvas bg-soft scrollbar">
              <div className="d-flex justify-content-between align-items-center mb-2 d-md-none">
                <h3 className="mb-0">Lead Details</h3>
              </div>
              <LeadProfileCard className="mb-3" />
              <AboutLeadCard className="mb-3" />
              <LeadAddressCard />
            </div>
          </div>
        </Col>
        <Col md={7} xl={8}>
          <div className="lead-details-container">
            <Nav
              className="nav-underline"
              // onSelect={selectedKey => alert('selected ' + selectedKey)}
            >
              <Nav.Item>
                <Nav.Link href="#task">Task</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#deals">Deals</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#email">Emails</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#attachments">Attachments</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tasks className="mb-8" />
            <LeadDeals className="mb-8" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LeadDetails;
