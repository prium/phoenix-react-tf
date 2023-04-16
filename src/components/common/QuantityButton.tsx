import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { ChangeEvent, useState } from 'react';

const QuantityButton = ({ defaultValue = 0 }: { defaultValue?: number }) => {
  const [quantity, setQuantity] = useState(defaultValue);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="d-flex flex-between-center">
      <Button variant="phoenix-primary" className="px-3" onClick={handleDecrease}>
        <FontAwesomeIcon icon="minus" />
      </Button>
      <input
        type="number"
        className="form-control text-center input-spin-none bg-transparent border-0 outline-none"
        style={{ width: 50 }}
        min="1"
        value={quantity}
        onChange={handleChange}
      />
      <Button variant="phoenix-primary" className="px-3" onClick={handleIncrease}>
        <FontAwesomeIcon icon="plus" />
      </Button>
    </div>
  );
};

export default QuantityButton;
