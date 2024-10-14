import React, { useState } from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import ReactSelect from 'components/base/ReactSelect';

import {
  flightAircraft,
  flightAirlines,
  flightAirports,
  flightCabins,
  flightSchedules,
  flightStops
} from 'data/travel-agency/customer/flight';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const FilterFlightStops = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Stops"
      titleClass="fs-8"
      containerSize="sm"
      id="flightStops"
    >
      <div className="p-3 pb-0">
        {flightStops.map(stop => (
          <Form.Check key={stop.id}>
            <Form.Check.Input id={stop.id} />
            <Form.Check.Label htmlFor={stop.id} className="fs-8 text-body">
              {stop.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightSchedule = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Flight Schedules"
      titleClass="fs-8"
      containerSize="sm"
      id="flightTime"
    >
      <div className="p-3 pb-0">
        {flightSchedules.map(schedule => (
          <div key={schedule.id} className={schedule.className}>
            <h5 className="mb-3">{schedule.title}</h5>
            <Row className="g-2">
              {schedule.scheduleChecks.map(check => (
                <Col key={check.id} xs={6} sm={4}>
                  <Form.Check.Input
                    className="btn-check flight-filter-checkbox"
                    name={schedule.name}
                    id={check.id}
                  />
                  <Form.Check.Label
                    className="btn btn-phoenix-secondary fw-bold text-nowrap w-100 px-0"
                    htmlFor={check.id}
                  >
                    {check.label}
                  </Form.Check.Label>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightAirports = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Airports"
      titleClass="fs-8"
      containerSize="sm"
      id="flightAirports"
    >
      <div className="p-3 pb-0">
        <div className="d-flex gap-3">
          {flightAirports.map(item => (
            <div key={item.id} className="flex-1">
              <h5 className="mb-3">{item.label}</h5>
              {item.airports.map(airport => (
                <Form.Check key={airport} className="gap-2">
                  <Form.Check.Input
                    id={airport.split(' : ')[0]}
                    className="mt-0"
                  />
                  <Form.Check.Label
                    htmlFor={airport.split(' : ')[0]}
                    className="fs-9 text-body lh-sm"
                  >
                    {airport}
                  </Form.Check.Label>
                </Form.Check>
              ))}
            </div>
          ))}
        </div>
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightAirlines = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Airlines"
      titleClass="fs-8"
      containerSize="sm"
      id="flightAirlines"
    >
      <div className="p-3 pb-0">
        {flightAirlines.map(airline => (
          <Form.Check key={airline.id}>
            <Form.Check.Input id={airline.id} />
            <Form.Check.Label htmlFor={airline.id} className="fs-8 text-body">
              {airline.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightCabin = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Cabin"
      titleClass="fs-8"
      containerSize="sm"
      id="flightCabin"
    >
      <div className="p-3 pb-0">
        {flightCabins.map(cabin => (
          <Form.Check key={cabin.id}>
            <Form.Check.Input id={cabin.id} />
            <Form.Check.Label htmlFor={cabin.id} className="fs-8 text-body">
              {cabin.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightAircraft = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Aircraft"
      titleClass="fs-8"
      containerSize="sm"
      id="flightStops"
    >
      <div className="p-3 pb-0">
        <div className="d-flex mb-3">
          <Form.Check type="radio" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              id="includeAircraft"
              name="aircrafts"
            />
            <Form.Check.Label
              htmlFor="includeAircraft"
              className="fs-8 text-body"
            >
              Include
            </Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              id="excludeAircraft"
              name="aircrafts"
              checked
            />
            <Form.Check.Label
              htmlFor="excludeAircraft"
              className="fs-8 text-body"
            >
              Exclude
            </Form.Check.Label>
          </Form.Check>
        </div>
        {flightAircraft.map(aircraft => (
          <Form.Check key={aircraft.id}>
            <Form.Check.Input id={aircraft.id} />
            <Form.Check.Label htmlFor={aircraft.id} className="fs-8 text-body">
              {aircraft.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightDuration = () => {
  const [values, setValues] = useState([48]);
  return (
    <CollapsibleContainer
      collapseTitle="Flight Duration"
      titleClass="fs-8"
      containerSize="sm"
      id="flightDuration"
    >
      <div className="p-3 pb-0">
        <div className="d-flex flex-between-center mb-2">
          <h6 className="mb-0 text-body-highlight fw-semibold">0h 45m</h6>
          <h6 className="mb-0 text-body-highlight fw-semibold">0h 55m</h6>
        </div>
        <PhoenixReactRange
          step={1}
          min={45}
          max={55}
          trackHeight="6px"
          classNames="phoenix-react-range-medium mt-3"
          variant="primary-lighter"
          values={values}
          onChange={val => setValues(val)}
          tipFormatter={values => `${values}m`}
        />
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightPriceCalculator = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Price Calculator"
      titleClass="fs-8"
      containerSize="sm"
      id="flightPriceCalculator"
    >
      <div className="p-3 pb-0">
        <ReactSelect
          placeholder="Select Method"
          isMulti
          options={[
            { value: 'mastercarddebit', label: 'Mastercard debit' },
            { value: 'mastercardcredit', label: 'Mastercard credit' },
            { value: 'visadebit', label: 'Visa debit' },
            { value: 'visacredit', label: 'Visa credit' },
            { value: 'americanexpress', label: 'American Express' },
            { value: 'paypal', label: 'Paypal' }
          ]}
        />
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFlightBaggage = () => {
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };
  return (
    <CollapsibleContainer
      collapseTitle="Baggage"
      titleClass="fs-8"
      containerSize="sm"
      id="flightBaggage"
    >
      <div className="p-3 pb-0">
        <div className="d-flex gap-2 justify-content-between">
          <div>
            <h5 className="mb-3 text-body-highlight">Carry on bag</h5>
            <InputGroup className="gap-1">
              <Button
                variant="phoenix-primary"
                className="px-2 rounded"
                onClick={() => handleCount('decrease')}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <Form.Control
                type="number"
                id="carryOnBag"
                value={value}
                onChange={e => setValue(parseInt(e.target.value))}
                className="border-translucent input-spin-none text-center rounded"
              />
              <Button
                variant="phoenix-primary"
                className="px-2 rounded"
                onClick={() => handleCount('increase')}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </InputGroup>
          </div>
          <div>
            <h5 className="mb-3 text-body-highlight">Checked bag</h5>
            <InputGroup className="gap-1">
              <Button
                variant="phoenix-primary"
                className="px-2 rounded"
                onClick={() => handleCount('decrease')}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <Form.Control
                type="number"
                id="carryOnBag"
                value={value}
                onChange={e => setValue(parseInt(e.target.value))}
                className="border-translucent input-spin-none text-center rounded"
              />
              <Button
                variant="phoenix-primary"
                className="px-2 rounded"
                onClick={() => handleCount('increase')}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </CollapsibleContainer>
  );
};
