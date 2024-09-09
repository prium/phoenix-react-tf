import React, { Fragment } from 'react';
import type { Rating, Review } from 'data/travel-agency/customer/hotelDetails';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import Badge from 'components/base/Badge';
import Avatar from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendar,
  faReply,
  faThumbsDown,
  faThumbsUp,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';

type Props = {
  ratings: Rating[];
  reviews: Review[];
};

const HotelDetailsReviews = ({ ratings, reviews }: Props) => {
  return (
    <>
      <h3 className="mb-5">Reviews</h3>
      <Row className="gx-md-6 gx-xl-8 gy-2">
        {ratings.map((item: Rating, index: number) => (
          <Col key={index} md={6} lg={5}>
            <Row className="align-items-center g-0">
              <Col xs={4}>
                <h5 className="mb-0 text-body text-nowrap">{item.name}</h5>
              </Col>
              <Col xs={8}>
                <div className="d-flex align-items-center gap-2">
                  <Badge bg="primary" className="fs-8">
                    {item.rating.toString()}
                  </Badge>
                  <ProgressBar
                    now={parseFloat(item.rating) * 20}
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <hr className="mt-5 mb-8" />
      {reviews.map((review: Review, index: number) => (
        <Fragment key={index}>
          <div className="d-flex align-items-center position-relative gap-2 mb-3">
            <Avatar src={review.avatar} size="s" />
            <a
              href="#!"
              className="fw-semibold text-body-emphasis stretched-link"
            >
              {review.name}
            </a>
            <img src={review.flag} alt="" />
          </div>
          <div className="d-flex align-items-center flex-wrap gap-5 mb-5">
            <div className="d-flex align-items-center gap-4">
              <div className="border-end pe-4">
                <Badge bg="primary" className="fs-8">
                  {review.rating}
                </Badge>
              </div>
              <a href="#!" className="text-body-tertiary">
                <FontAwesomeIcon icon={faBed} className="me-2 fs-9" />
                {review.service}
              </a>
            </div>
            <div className="d-flex align-items-center gap-5">
              <h5 className="fw-normal text-body-tertiary">
                <FontAwesomeIcon icon={faCalendar} className="me-2 fs-9" />
                {review.date}
              </h5>
              <h5 className="fw-normal text-body-tertiary">
                <FontAwesomeIcon icon={faUser} className="me-2 fs-9" />
                {review.travelerType}
              </h5>
            </div>
          </div>
          <div className="d-flex gap-3 mb-5">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-success"
              transform={'down-5'}
            />
            <p className="mb-0">{review.liked}</p>
          </div>
          <div className="d-flex gap-3 mb-5">
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="text-body-quaternary"
              transform={'down-5'}
            />
            <p className="mb-0">{review.disLiked}</p>
          </div>
          <Card className="bg-body-highlight">
            <Card.Body>
              <h6 className="mb-2 fw-bolder text-body-quaternary text-uppercase">
                <FontAwesomeIcon icon={faReply} className="me-2" />
                Hotel's Reply:
              </h6>
              <p className="mb-0">{review.hotelsReply}</p>
            </Card.Body>
          </Card>
          <hr
            className={`mt-8 ${index !== reviews.length - 1 ? 'mb-8' : 'mb-0'}`}
          />
        </Fragment>
      ))}
      <Button
        variant=""
        className="bg-body border-translucent text-body-quaternary fw-bolder mt-n4"
      >
        Show 2 more replies
      </Button>
    </>
  );
};

export default HotelDetailsReviews;
