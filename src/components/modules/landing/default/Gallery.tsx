import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Gallery = () => {
  return (
    <section className="bg-white pb-lg-6 pb-xl-8">
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <Row className=" mb-8 text-center text-sm-start">
          <Col xs={12} className="mb-4">
            <h4 className="text-primary fw-bolder mb-3">Gallery</h4>
            <h2>Some of Our Best Works</h2>
          </Col>
          <Col lg={6}>
            <p>
              Rise like Phoenix focusing only on functionalities for your digital products leaving
              the design for us. Show what you do, with our latest admin dashboard. Check our best
              works and let us know what you want to find.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              Want to tell your customers about the details of how and what? Tell them with all the
              posts at one place without them ridirecting to another page or site.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Gallery;
