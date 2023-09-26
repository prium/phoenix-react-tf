import Logo from 'components/common/Logo';
import ResetPasswordForm from 'components/modules/auth/ResetPasswordForm';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="auth-form-box">
      <Link to="/" className="d-flex flex-center text-decoration-none mb-4">
        <Logo
          text={false}
          width={58}
          className="fw-bolder fs-5 d-inline-block"
        />
      </Link>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
