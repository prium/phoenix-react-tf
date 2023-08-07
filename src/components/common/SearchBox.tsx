import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { CSSProperties, PropsWithChildren } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';

interface SearchBoxProps extends FormControlProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  formClassName?: string;
  size?: 'sm' | 'lg';
  style?: CSSProperties;
}

const SearchBox = ({
  placeholder = 'Search',
  size,
  className,
  inputClassName,
  formClassName,
  style,
  children,
  ...rest
}: PropsWithChildren<SearchBoxProps>) => {
  return (
    <div className={classNames('search-box', className)} style={style}>
      <form className={classNames('position-relative', formClassName)}>
        <Form.Control
          type="search"
          placeholder={placeholder}
          className={classNames('search-input search', inputClassName)}
          size={size}
          {...rest}
        />
        <FontAwesomeIcon icon="search" className="search-box-icon" />
      </form>
      {children}
    </div>
  );
};

export default SearchBox;
