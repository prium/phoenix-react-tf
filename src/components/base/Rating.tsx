import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating as ReactRating, RatingProps as ReactRatingProps } from 'react-simple-star-rating';

const Rating = ({ ...rest }: ReactRatingProps) => {
  return (
    <ReactRating
      fillIcon={<FontAwesomeIcon icon="star" className="text-warning" />}
      emptyIcon={<FontAwesomeIcon icon={['far', 'star']} className="text-300" />}
      {...rest}
    />
  );
};

export default Rating;
