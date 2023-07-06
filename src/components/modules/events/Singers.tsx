import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/gallery/19.jpg';
import img2 from '../../../assets/img/gallery/20.jpg';
import img3 from '../../../assets/img/gallery/21.jpg';

const Singers = () => {
  return (
    <>
      <h4 className="mb-3 fw-bold text-1000 fs-xxl-6">Singers:</h4>
      <p>
        To join the festival, you’ll need to register through
        <Link to="mailto:register@event.com"> register@event.com </Link>
        After confirming the payment, you’ll be provided with a unique ID number
        that you’ll need to show before the authority to get the tickets.
      </p>
      <p>
        The ID number will be unique to all members, so it’s requested that you
        don’t share it with anyone. Any damage regarding a misused ID will not
        be ours to compensate or refund.Enjoy!
      </p>
      <Row className="g-1 g-sm-2 mb-7 mb-xxl-8">
        <Col xs={3}>
          <img src={img1} alt="" className="rounded h-100 w-100 fit-cover" />
        </Col>
        <Col xs={3}>
          <img src={img2} alt="" className="rounded h-100 w-100 fit-cover" />
        </Col>
        <Col xs={6}>
          <img src={img3} alt="" className="rounded h-100 w-100 fit-cover" />
        </Col>
      </Row>
    </>
  );
};

export default Singers;
