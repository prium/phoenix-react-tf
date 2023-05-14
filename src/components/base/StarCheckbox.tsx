import React, { InputHTMLAttributes, useState } from 'react';
import Rating from './Rating';
import classNames from 'classnames';

interface StarCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  defaultChecked?: boolean;
}

const StarCheckbox = ({ className, defaultChecked, ...rest }: StarCheckboxProps) => {
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
        // initialValue={checked ? 1 : 0}
        iconsCount={1}
        allowFraction={false}
        onClick={handleRating}
      />
    </>
  );
};

export default StarCheckbox;
