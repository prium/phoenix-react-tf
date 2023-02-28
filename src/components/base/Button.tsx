import React, { PropsWithChildren } from 'react';
import { Button as BsButton, ButtonProps as BsButtonProps } from 'react-bootstrap';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-light'
  | 'phoenix-primary'
  | 'phoenix-secondary'
  | 'phoenix-success'
  | 'phoenix-danger'
  | 'phoenix-warning'
  | 'phoenix-info'
  | 'phoenix-dark'
  | 'phoenix-light'
  | 'soft-primary'
  | 'soft-secondary'
  | 'soft-success'
  | 'soft-danger'
  | 'soft-warning'
  | 'soft-info'
  | 'soft-dark'
  | 'soft-light';

export interface ButtonProps extends BsButtonProps {
  variant?: ButtonVariant;
}

const Button = ({ children, ...rest }: PropsWithChildren<ButtonProps>) => {
  return <BsButton {...rest}>{children}</BsButton>;
};

export default Button;
