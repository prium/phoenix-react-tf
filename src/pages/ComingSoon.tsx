import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'lottie-react';
import comingSoonLight from 'assets/img/animated-icons/coming-soon-light.json';
import Button from 'components/base/Button';

const ComingSoon = () => {
  return (
    <Row className="align-items-censter content-min-h">
      <Col xs={12} lg={6}>
        <div style={{ height: '40vh' }}>
          <Lottie
            animationData={comingSoonLight}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Col>
      <Col xs={12} lg={6}>
        <div className="d-flex justify-content-end">
          <div style={{ maxWidth: 618 }}>
            <div className="position-relative mb-lg-15">
              <h1
                className="display-1 fw-black text-info-200"
                style={{ transform: 'rotate(1deg)' }}
              >
                Coming Soon!!!
              </h1>
              <h1
                className="display-1 fw-black text-primary position-absolute top-0 start-0"
                style={{ transform: 'rotate(-3deg)' }}
              >
                Coming Soon!!!
              </h1>
            </div>
            <h2 className="text-gray-800 mb-3">This page is under development.</h2>
            <p className="mb-6">
              This page is under development. We're making it a top priority to get all the pages
              from the newest HTML version of Phoenix over to the React JS version. Let's go!
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Button style={{ minWidth: 200 }}>
                <FontAwesomeIcon icon="angle-left" className="me-2" />
                Getting Started
              </Button>
              <Button variant="outline-primary" style={{ minWidth: 200 }}>
                Preview HTML Demo
                <FontAwesomeIcon icon="arrow-up-right-from-square" className="ms-2 fs-10" />
              </Button>
            </div>
          </div>
        </div>
      </Col>
      {/* <Col> */}
    </Row>
  );
};

export default ComingSoon;
