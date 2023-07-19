import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import SearchBox from 'components/common/SearchBox';
import EmailSidebar from 'components/modules/email/EmailSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import React, { PropsWithChildren, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const EmailLayout = ({
  children,
  showComposeBtn
}: PropsWithChildren<{ showComposeBtn?: boolean }>) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { breakpoints } = useBreakpoints();
  return (
    <div className="email-container">
      <Row className="gx-lg-6 gx-3 py-4 z-index-2 position-sticky bg-soft email-header">
        <Col className="col-auto">
          <Button
            variant="primary"
            className="email-sidebar-width d-none d-lg-block"
            onClick={() => setOpenSidebar(true)}
          >
            Compose
          </Button>
          <Button
            variant="phoenix-secondary"
            className="px-3 text-700 d-lg-none"
            onClick={() => setOpenSidebar(true)}
          >
            <FontAwesomeIcon icon="bars" />
          </Button>
        </Col>
        {showComposeBtn && (
          <Col className="col-auto d-lg-none">
            <Button
              variant="primary"
              className="px-3 px-sm-4"
              // href={`${CWD}${paths['email-compose']}`}
            >
              <span className="d-none d-sm-inline-block">Compose</span>
              <FontAwesomeIcon icon="plus" className="d-sm-none" />
            </Button>
          </Col>
        )}
        <Col className="col-auto flex-1">
          <SearchBox className="w-100" />
        </Col>
      </Row>
      <Row className="g-lg-6 mb-8">
        <Col lg="auto">
          <div
            className="email-sidebar email-sidebar-width bg-soft d-none d-lg-block"
            id="emailSidebarColumn"
          >
            <EmailSidebar />
          </div>
          {breakpoints.down('lg') && (
            <PhoenixOffcanvas
              open={openSidebar}
              fixed
              placement="start"
              className="email-sidebar email-sidebar-width bg-soft"
              backdropClassName="top-0"
              onHide={() => setOpenSidebar(false)}
            >
              <EmailSidebar hideSidebar={() => setOpenSidebar(false)} />
            </PhoenixOffcanvas>
          )}
        </Col>
        {children}
      </Row>
    </div>
  );
};

export default EmailLayout;
