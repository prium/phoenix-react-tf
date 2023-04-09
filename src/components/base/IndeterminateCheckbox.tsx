// @ts-nocheck
import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import { Form } from 'react-bootstrap';

interface IndeterminateCheckboxProps {
  indeterminate?: boolean;
}

const IndeterminateCheckbox = ({
  indeterminate,
  className,
  ...rest
}: IndeterminateCheckboxProps & HTMLProps<HTMLInputElement>) => {
  // console.log({ ...rest });

  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <Form.Check type="checkbox" className={classNames('form-check fs-8 mb-0', className)}>
      <Form.Check.Input type="checkbox" ref={ref} {...rest} />
    </Form.Check>
  );
};
export default IndeterminateCheckbox;
