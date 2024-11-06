import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';

import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface FlightBaggageInputFieldProps {
  title: string;
}

const FlightBaggageInputField = ({ title }: FlightBaggageInputFieldProps) => {
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };

  return (
    <>
      <h5 className="mb-3 text-body-highlight">{title}</h5>
      <InputGroup className="gap-1">
        <Button
          variant="phoenix-primary"
          className="px-2 rounded"
          onClick={() => handleCount('decrease')}
        >
          <FontAwesomeIcon icon={faMinus} className="px-1" />
        </Button>

        <Form.Control
          type="number"
          defaultValue={2}
          value={value}
          onChange={e => setValue(parseInt(e.target.value))}
          className="border-translucent input-spin-none text-center rounded"
        />
        <Button
          variant="phoenix-primary"
          className="px-2 rounded"
          onClick={() => handleCount('increase')}
        >
          <FontAwesomeIcon icon={faPlus} className="px-1" />
        </Button>
      </InputGroup>
    </>
  );
};

const FilterFormFlightBaggage = () => {
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
            <FlightBaggageInputField title="Carry on bag" />
          </div>
          <div>
            <FlightBaggageInputField title="Checked bag" />
          </div>
        </div>
      </div>
    </CollapsibleContainer>
  );
};

export default FilterFormFlightBaggage;
