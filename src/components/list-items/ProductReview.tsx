import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import { ProductReviewType } from 'data/ecommerce';
import React from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';

const ProductReview = ({ review }: { review: ProductReviewType }) => {
  return (
    <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex align-items-center">
          <Rating readonly initialValue={review.star} />
          <h5 className="mb-0 ms-2">
            <span className="text-800 me-1">by</span>
            {review.customer}
          </h5>
        </div>
        <Dropdown className="position-static" align="end">
          <Dropdown.Toggle
            variant=""
            size="sm"
            className="btn-reveal dropdown-caret-none transition-none"
          >
            <FontAwesomeIcon icon="ellipsis" className="fs-10" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="py-2">
            <Dropdown.Item eventKey="1">View</Dropdown.Item>
            <Dropdown.Item eventKey="2">Export</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" className="text-danger">
              Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <p className="text-700 fs-9 mb-1">{review.date}</p>
      <p
        className={classNames('text-1000', {
          'mb-3': review.images,
          'mb-1': !review.images
        })}
      >
        {review.review}
      </p>
      {review.images && (
        <Row className="g-2 mb-2">
          {review.images.map(image => (
            <Col xs="auto" key={image}>
              <img src={image} key={image} alt="" className="w-100" height={164} />
            </Col>
          ))}
        </Row>
      )}

      {review.reply && (
        <div className="d-flex">
          <FontAwesomeIcon icon="reply" className="me-2" transform="rotate-180" />
          <div>
            <h5>
              Respond from {review.reply.from}
              <span className="text-700 fs-9 ms-2">{review.reply.time} </span>
            </h5>
            <p className="text-1000 mb-0">{review.reply.text}</p>
          </div>
        </div>
      )}
      <div className="hover-actions top-0">
        <Button className="me-2" variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon="thumbs-up" />
        </Button>
        <Button className="me-1" variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon="thumbs-down" />
        </Button>
      </div>
    </div>
  );
};

export default ProductReview;
