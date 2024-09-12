import React, { Fragment, useState } from 'react';
import { type AvailableRoom } from 'data/travel-agency/customer/hotelDetails';
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import DatePicker from 'components/base/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import HotelDetailsAvailabilityRoomInfo from './HotelDetailsAvailabilityRoomInfo';

interface HotelDetailsAvailabilityProps {
  availableRooms: AvailableRoom[];
}

const HotelDetailsAvailability = ({
  availableRooms
}: HotelDetailsAvailabilityProps) => {
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };
  return (
    <>
      <h3 className="mb-3 fw-bold">Availability</h3>
      <Card>
        <Card.Body>
          <Row className="g-3">
            <Col sm={6} lg={3}>
              <label
                className="fw-bold text-body-tertiary mb-1"
                htmlFor="checkIn"
              >
                Check in
              </label>
              <div className="form-icon-container flatpickr-input-container">
                <DatePicker
                  render={(_, ref) => {
                    return (
                      <>
                        <Form.Control
                          type="text"
                          placeholder="26 Jan, 2023"
                          ref={ref}
                          id="checkIn"
                          className="form-icon-input "
                        />
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="form-icon fs-9 text-body"
                        />
                      </>
                    );
                  }}
                  hideIcon={true}
                  options={{
                    minDate: 'today',
                    dateFormat: 'Y-m-d'
                  }}
                />
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <label
                className="fw-bold text-body-tertiary mb-1"
                htmlFor="checkOut"
              >
                Check out
              </label>
              <div className="form-icon-container flatpickr-input-container">
                <DatePicker
                  render={(_, ref) => {
                    return (
                      <>
                        <Form.Control
                          type="text"
                          placeholder="26 Jan, 2023"
                          ref={ref}
                          id="checkOut"
                          className="form-icon-input "
                        />
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="form-icon fs-9 text-body"
                        />
                      </>
                    );
                  }}
                  hideIcon={true}
                  options={{
                    minDate: 'today',
                    dateFormat: 'Y-m-d'
                  }}
                />
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <label
                className="fw-bold text-body-tertiary mb-1"
                htmlFor="adults"
              >
                Adults
              </label>
              <InputGroup className="gap-2">
                <Button
                  variant="phoenix-primary"
                  className="px-3 rounded"
                  onClick={() => handleCount('decrease')}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>

                <Form.Control
                  type="number"
                  id="adults"
                  value={value}
                  onChange={e => setValue(parseInt(e.target.value))}
                  className="border-translucent input-spin-none text-center rounded"
                />
                <Button
                  variant="phoenix-primary"
                  className="px-3 rounded"
                  onClick={() => handleCount('increase')}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </InputGroup>
            </Col>
            <Col sm="auto" className="ms-auto align-self-end">
              <Button variant="primary" className="w-100">
                Update Results
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {availableRooms.map(room => (
        <Fragment key={room.id}>
          <hr className="my-6" />
          <HotelDetailsAvailabilityRoomInfo room={room} />
        </Fragment>
      ))}
    </>
  );
};

export default HotelDetailsAvailability;
