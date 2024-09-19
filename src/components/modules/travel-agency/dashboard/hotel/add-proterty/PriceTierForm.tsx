import classNames from 'classnames';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { ChangeEvent, useState } from 'react';
import { Form } from 'react-bootstrap';

interface PriceTierFormProps {
  id: string;
  name: string;
  className?: string;
}

const PriceTierForm = ({
  id,
  name,
  className = 'mb-3'
}: PriceTierFormProps) => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData, setFormData } = methods;
  const [active, setActive] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? 'available' : 'not-available'
    });
  };

  return (
    <div
      className={classNames('form-price-tier border p-3 rounded-2', className, {
        active: active
      })}
    >
      <div className="d-sm-flex align-items-center gap-3">
        <Form.Check id={id} type="switch">
          <Form.Check.Input
            onClick={() => {
              setActive(!active);
            }}
            onChange={handleChange}
            name={id}
          />
          <Form.Check.Label className="fw-bold fs-8 text-body ms-2">
            {name}
          </Form.Check.Label>
        </Form.Check>
      </div>
    </div>
  );
};

export default PriceTierForm;
