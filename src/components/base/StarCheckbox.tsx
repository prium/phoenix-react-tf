import React, { InputHTMLAttributes, useState } from 'react';
import Rating from './Rating';

interface StarCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  defaultChecked?: boolean;
}

const StarCheckbox = ({
  className,
  defaultChecked,
  ...rest
}: StarCheckboxProps) => {
  const [rating, setRating] = useState(0);

  const handleRating = () => {
    if (rating === 0) {
      setRating(1);
    } else {
      setRating(0);
    }
  };

  return (
    <>
      <Rating
        initialValue={rating}
        iconsCount={1}
        allowFraction={false}
        onClick={handleRating}
        iconClass="fs-8"
      />
    </>
  );
};

export default StarCheckbox;
