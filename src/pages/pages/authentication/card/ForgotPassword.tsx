import Logo from 'components/common/Logo';
import ForgotPasswordForm from 'components/modules/auth/ForgotPasswordForm';
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="auth-form-box">
      <Link to="/" className="d-flex flex-center text-decoration-none mb-4">
        <Logo
          text={false}
          width={58}
          className="fw-bolder fs-5 d-inline-block"
        />
      </Link>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
