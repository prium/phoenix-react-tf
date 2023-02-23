import React, { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

interface RadioItemProps<T> {
  name: string;
  value: string;
  thumb: string;
  label: string;
  defaultChecked?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement> & { target: { value: T } }) => void;
}

const RadioItem = <T extends string>({
  name,
  value,
  thumb,
  label,
  defaultChecked,
  handleChange
}: RadioItemProps<T>) => {
  return (
    <>
      <Form.Check.Input
        className="btn-check"
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <Form.Check.Label
        htmlFor={`${name}-${value}`}
        className="btn btn-navbar-style d-inline-block fs--1"
      >
        <span className="mb-2 rounded d-block">
          <img className="img-fluid img-prototype mb-0" src={thumb} alt="" />
        </span>
        <span className="label-text">{label}</span>
      </Form.Check.Label>
    </>
  );
};

export default RadioItem;
