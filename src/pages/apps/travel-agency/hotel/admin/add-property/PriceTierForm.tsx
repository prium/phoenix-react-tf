import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { useRef, useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

interface PriceTierForm {
  id: string;
  name: string;
  className?: string;
}

const PriceTierForm = ({ id, name, className = 'mb-3' }: PriceTierForm) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const buttonRef = useRef<null | HTMLInputElement>(null);

  return (
    <div
      className={classNames('form-price-tier border p-3 rounded-2', className, {
        active: active
      })}
    >
      <div className="d-sm-flex align-items-center gap-3">
        <Form.Check name={id} id={id} type="switch">
          <Form.Check.Input
            onClick={() => {
              setActive(!active);
              if (buttonRef && buttonRef.current) {
                buttonRef.current.click();
              }
            }}
          />
          <Form.Check.Label className="fw-bold fs-8 text-body ms-2">
            {name}
          </Form.Check.Label>
        </Form.Check>
        <div className="pricings ms-auto mt-2 mt-sm-0">
          <Form.Check
            inline
            label="Free"
            name={`${id}`}
            id={`${id}-free`}
            type="radio"
            className="me-3 mb-0"
            onClick={() => setOpen(false)}
            aria-controls={`${id}`}
            ref={buttonRef}
          />
          <Form.Check
            inline
            label="Paid"
            name={`${id}`}
            id={`${id}-paid`}
            type="radio"
            className="me-0 mb-0"
            onClick={() => setOpen(true)}
            aria-controls={`${id}`}
          />
        </div>
      </div>
      <Collapse in={open}>
        <div id={`${id}`}>
          <div className="p-4 bg-primary-subtle rounded-3 mt-3">
            {[1, 2, 3].map((item, index) => (
              <Form.Check
                key={index}
                name={`${id}-option${item}`}
                id={`${id}-option${item}`}
              >
                <Form.Check.Input type="checkbox"></Form.Check.Input>
                <Form.Check.Label className="fw-normal fs-8 fw-semibold mb-4">
                  Option {item}
                </Form.Check.Label>
              </Form.Check>
            ))}
            <Button variant="link" className="p-0">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Additional Condition
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PriceTierForm;
