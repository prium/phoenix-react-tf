import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import React, { HTMLProps, MutableRefObject, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';

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
      <Form.Check.Input type={'checkbox' as FormCheckType} ref={ref} {...rest} />
    </Form.Check>
  );
};
export default IndeterminateCheckbox;
