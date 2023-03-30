import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import React, { MutableRefObject, useRef } from 'react';
import { Form } from 'react-bootstrap';

interface IndeterminateCheckboxProps {
  indeterminate?: boolean;
  className?: string;
}

const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, IndeterminateCheckboxProps>(
  ({ indeterminate, className, ...rest }, ref) => {
    // console.log({ ...rest });
    useAdvanceTableContext();

    const defaultRef = useRef<HTMLInputElement>(null);

    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      (resolvedRef as MutableRefObject<HTMLInputElement>).current.indeterminate = !!indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Form.Check type="checkbox" className={classNames('form-check fs-8 mb-0', className)}>
        <Form.Check.Input type="checkbox" ref={resolvedRef} {...rest} />
      </Form.Check>
    );
  }
);
export default IndeterminateCheckbox;
