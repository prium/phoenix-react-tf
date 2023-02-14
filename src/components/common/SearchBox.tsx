import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { Form } from 'react-bootstrap';

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  size?: 'sm' | 'lg';
}

const SearchBox = ({
  placeholder = 'Search',
  size,
  className,
  inputClassName,
  ...rest
}: SearchBoxProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames('search-box', className)} {...rest}>
      <form className="position-relative">
        <Form.Control
          type="search"
          placeholder={placeholder}
          className={classNames('search-input search', inputClassName)}
          size={size}
        />
        <FontAwesomeIcon icon="search" className="search-box-icon" />
      </form>
    </div>
  );
};

export default SearchBox;
