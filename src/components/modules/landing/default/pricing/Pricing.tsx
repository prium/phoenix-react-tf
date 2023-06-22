import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Pricing = () => {
  return (
    <section className="bg-white pt-lg-0 pt-xl-8">
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <Row>
          <Col xs={12} className="mb-4 text-center text-sm-start">
            <h4 className="text-primary fw-bolder mb-3">Pricing</h4>
            <h2>Choose the best deal for you</h2>
          </Col>
          <Col md={6} className="text-center text-sm-start">
            <p>
              Entice your customers with {process.env.REACT_APP_TITLE} admin dashboard. Show your
              best deal in this section to help customers choose from your best offers and place
              them all in one place with this efficient template. If you are availing more than one
              offer to your customers, let them compare among them and search for what they need to
              get. Show offer details here and entice them to buy.
            </p>
          </Col>
          <Col md={6} className="text-center text-sm-start">
            <p>
              offer to your customers, let them compare among them and search for what they need to
              get. Show offer details here and entice them to buy.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Pricing;
