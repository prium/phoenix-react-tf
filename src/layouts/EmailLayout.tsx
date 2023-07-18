import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import EmailSidebar from 'components/modules/email/EmailSidebar';
import React, { PropsWithChildren } from 'react';
import { Col, Row } from 'react-bootstrap';

const EmailLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="email-container">
      <Row className="gx-lg-6 gx-3 py-4 z-index-2 position-sticky bg-soft email-header">
        <Col className="col-auto">
          <Button
            variant="primary"
            className="email-sidebar-width d-none d-lg-block"
            // href={`${CWD}${paths['email-compose']}`}
          >
            Compose
          </Button>
          <Button
            variant="phoenix-secondary"
            className="px-3 text-700 d-lg-none"
          >
            <FontAwesomeIcon icon="bars" />
          </Button>
        </Col>
        {true && (
          <Col className="col-auto d-lg-none">
            <Button
              variant="primary"
              className="px-3 px-sm-4"
              // href={`${CWD}${paths['email-compose']}`}
            >
              <span className="d-none d-sm-inline-block">Compose</span>
              <span className="d-sm-none fas fa-plus"></span>
            </Button>
          </Col>
        )}
        <Col className="col-auto flex-1">
          <SearchBox className="w-100" />
        </Col>
      </Row>
      <Row className="g-lg-6 mb-8">
        <Col className="col-lg-auto">
          <div
            className="email-sidebar email-sidebar-width bg-soft phoenix-offcanvas phoenix-offcanvas-fixed"
            id="emailSidebarColumn"
          >
            <EmailSidebar />
          </div>
          <div
            className="phoenix-offcanvas-backdrop d-lg-none"
            data-phoenix-backdrop
            style={{ top: 0 }}
          ></div>
        </Col>
        {children}
      </Row>
    </div>
  );
};

export default EmailLayout;
