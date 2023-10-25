import classNames from 'classnames';
import React, { PropsWithChildren, ReactElement } from 'react';
import { FloatingLabel, FloatingLabelProps, Form } from 'react-bootstrap';

export interface PhoenixFloatingLabelProps extends FloatingLabelProps {
  startComponent?: ReactElement;
  endComponent?: ReactElement;
}
const PhoenixFloatingLabel = ({
  children,
  startComponent,
  endComponent,
  className,
  label,
  ...rest
}: PropsWithChildren<PhoenixFloatingLabelProps>) => {
  return (
    <Form.Floating
      className={classNames(className, 'phoenix-form-floating', {
        // 'ps-6': startComponent
      })}
      {...rest}
    >
      {startComponent &&
        React.cloneElement(startComponent as ReactElement, {
          className: classNames(
            startComponent.props.className,
            'form-floating-icon form-floating-start-icon'
          )
        })}

      {children}

      {endComponent &&
        React.cloneElement(endComponent as ReactElement, {
          className: classNames(
            endComponent.props.className,
            'form-floating-icon form-floating-end-icon'
          )
        })}
      <label
        className={classNames({
          'ps-6': startComponent
        })}
      >
        {label}
      </label>
    </Form.Floating>
  );
};

export default PhoenixFloatingLabel;
