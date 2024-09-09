import React from 'react';
import { AvailableRoom } from 'data/travel-agency/customer/hotelDetails';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import {
  faBed,
  faCheck,
  faCircle,
  faMugSaucer,
  faUser,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import RoomImageGallery from './RoomImageGallery';
import Button from 'components/base/Button';

type Props = {
  room: AvailableRoom;
};

const renderIcons = (count: number, iconClass: IconDefinition) => {
  return Array.from({ length: count }).map((_, index) => (
    <FontAwesomeIcon
      icon={iconClass}
      key={index}
      className={`text-primary fs-9 ${index !== count - 1 ? 'me-1' : ''}`}
    />
  ));
};

const RoomInfo = ({ room }: Props) => {
  return (
    <>
      <Row className="g-3 mb-4">
        <Col lg={8} xxl={7}>
          <Row className="flex-lg-nowrap g-3 mb-2">
            <Col md={'auto'}>
              <h4 className="mb-0 fw-semibold">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="fs-9 text-body-quaternary me-2"
                  transform={'up-1'}
                />
                {room.name}
              </h4>
            </Col>
            <Col md={'auto'} className="d-flex align-items-center">
              <div className="vr bg-body-secondary me-3 d-none d-md-block" />
              {renderIcons(room.beds, faBed)}

              <div className="vr bg-body-secondary mx-3" />
              {renderIcons(room.person, faUser)}

              <div className="vr bg-body-secondary mx-3" />
              {room.breakfast && (
                <>
                  <FontAwesomeIcon
                    icon={faMugSaucer}
                    className="text-primary fs-9"
                  />
                  <div className="vr bg-body-secondary mx-3" />
                </>
              )}
              <Badge variant="phoenix" bg="info">
                {room.discount}% OFF
              </Badge>
            </Col>
          </Row>
          <p className="mb-0">{room.desc}</p>
        </Col>
        <Col lg={4} xxl={5}>
          <h3 className="mb-2 d-flex align-items-center justify-content-lg-end gap-2">
            <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
              ${room.price}
            </span>
            ${room.discountPrice}
          </h3>
          <h5 className="text-body text-lg-end fw-normal">
            +${room.tax} for tax and fees
          </h5>
        </Col>
      </Row>
      <Row className="g-3">
        <Col lg={7}>
          <RoomImageGallery images={room.images} />
        </Col>
        <Col lg={4} xl={5} xxl={4} className="ms-auto">
          <Card className="bg-body-highlight">
            <Card.Body>
              <ul className="mb-2 list-unstyled d-flex flex-wrap gap-2 text-body-highlight fs-9 lh-1">
                {room.amenities
                  .slice(0, 6)
                  .map((item: string, index: number) => (
                    <li key={index} className="me-1 mb-0">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-success me-1"
                      />
                      {item}
                    </li>
                  ))}
              </ul>
              <a href="#!" className="fw-bold fs-9">
                Show other amenities
              </a>
            </Card.Body>
          </Card>
          <Button variant="outline-primary" className="w-100 mt-3">
            Add room
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default RoomInfo;
