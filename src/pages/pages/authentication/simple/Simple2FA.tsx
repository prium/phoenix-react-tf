import Button from 'components/base/Button';
import SimpleAuthLayout from 'layouts/SimpleAuthLayout';
import React, { ChangeEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Simple2FA = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = e.target;
    const newOtp: string[] = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
  };
  return (
    <SimpleAuthLayout className="col-xxl-4">
      <div className="px-xxl-5">
        <div className="text-center mb-6">
          <h4 className="text-1000">Enter the verification code</h4>
          <p className="text-700 mb-0">
            An email containing a 6-digit verification code has been sent to the
            email address - exa*********.com
          </p>
          <p className="fs-10 mb-5">
            Don’t have access?
            <Link to="#!"> Use another method</Link>
          </p>
          <div className="verification-form">
            <div className="d-flex align-items-center gap-2 mb-3">
              {otp.map((_, index) => (
                <>
                  <Form.Control
                    key={index}
                    className="px-2 text-center"
                    type="number"
                    // disabled={index !== 0}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e, index)
                    }
                  />
                  {index === 2 && <span>-</span>}
                </>
              ))}
            </div>
            <Form.Check type="checkbox" className="text-start mb-4">
              <Form.Check.Input type="checkbox" name="2fa-checkbox" />
              <Form.Check.Label
                className="fs-8 fw-medium"
                htmlFor="2fa-checkbox"
              >
                Don’t ask again on this device
              </Form.Check.Label>
            </Form.Check>
            <Button variant="primary" className="w-100 mb-5" type="submit">
              Varify
            </Button>
            <Link to="#!" className="fs-9">
              Didn’t receive the code?
            </Link>
          </div>
        </div>
      </div>
    </SimpleAuthLayout>
  );
};

export default Simple2FA;
