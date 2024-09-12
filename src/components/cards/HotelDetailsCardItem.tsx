import React from 'react';
import { type CardItem } from 'data/travel-agency/customer/hotelDetails';
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faBed,
  faCircleXmark,
  faMoon,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { currencyFormat } from 'helpers/utils';

interface HotelDetailsCardItemProps {
  item: CardItem;
  index: number;
  className?: string;
  clickHandler: (id: number) => void;
}

const HotelDetailsCardItem = ({
  item,
  index,
  className,
  clickHandler
}: HotelDetailsCardItemProps) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Button
          className="p-0 position-absolute end-0 fs-8 mt-n5 me-n2 text-body-tertiary"
          onClick={() => clickHandler(item.id)}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </Button>
        <div className="d-flex justify-content-between gap-3 mb-4">
          <div>
            <h5 className="text-body-highlight"> Room {index + 1}</h5>
            <p className="mb-0 text-body-tertiary">{item.roomName}</p>
          </div>
          <h4 className="mb-0">
            {currencyFormat(item.price, {
              maximumFractionDigits: 2,
              useGrouping: true
            })}
          </h4>
        </div>

        <Row className="align-items-center g-0">
          <Col xs={3}>
            <h5 className="text-body text-nowrap mb-0">Check in</h5>
          </Col>
          <Col xs="auto">
            <span className="px-2">:</span>
          </Col>
          <Col xs="auto">{item.checkIn}</Col>
        </Row>

        <Row className="align-items-center g-0 mb-4">
          <Col xs={3}>
            <h5 className="text-body text-nowrap mb-0">Check out</h5>
          </Col>
          <Col xs="auto">
            <span className="px-2">:</span>
          </Col>
          <Col xs="auto">{item.checkOut}</Col>
        </Row>
        <div className="d-flex flex-wrap gap-2">
          <Badge
            variant="phoenix"
            bg="secondary"
            className="py-1 border-0 text-capitalize"
          >
            <FontAwesomeIcon icon={faBed} className="fs-9 me-2" />
            {item.bedType}
          </Badge>
          <Badge
            variant="phoenix"
            bg="secondary"
            className="py-1 border-0 text-capitalize"
          >
            <FontAwesomeIcon icon={faUser} className="fs-9 me-2" />
            {item.adults} Adults
          </Badge>
          {item.child && (
            <Badge
              variant="phoenix"
              bg="secondary"
              className="py-1 border-0 text-capitalize"
            >
              <FontAwesomeIcon icon={faBaby} className="fs-9 me-2" />
              {item.child} Childs
            </Badge>
          )}
          {item.nights && (
            <Badge
              variant="phoenix"
              bg="secondary"
              className="py-1 border-0 text-capitalize"
            >
              <FontAwesomeIcon icon={faMoon} className="fs-9 me-2" />
              {item.nights} Nights
            </Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default HotelDetailsCardItem;
