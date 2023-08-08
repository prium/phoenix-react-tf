import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import illustration31 from 'assets/img/spot-illustrations/31.png';

const NecessaryPages = () => {
  return (
    <section className="pb-13">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="mb-6 text-1000 fw-normal">
              Smartly designed
              <span className="text-primary position-relative fw-bolder ms-2">
                necessary pages
                <img
                  src={illustration31}
                  alt=""
                  className="w-100 text-illustration-underline"
                />
              </span>
            </h2>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </section>
  );
};

export default NecessaryPages;
