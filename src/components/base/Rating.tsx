import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Rating as ReactRating, RatingProps as ReactRatingProps } from 'react-simple-star-rating';

interface RatingProps extends ReactRatingProps {
  iconClass?: string;
}

const Rating = ({ iconClass, ...rest }: RatingProps) => {
  return (
    <ReactRating
      allowFraction
      fillIcon={<FontAwesomeIcon icon="star" className={classNames(iconClass, 'text-warning')} />}
      emptyIcon={
        <FontAwesomeIcon icon={['far', 'star']} className={classNames(iconClass, 'text-warning')} />
      }
      {...rest}
    />
  );
};

export default Rating;
