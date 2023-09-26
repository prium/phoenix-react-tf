import Logo from 'components/common/Logo';
import TwoFAForm from 'components/modules/auth/TwoFAForm';
import { Link } from 'react-router-dom';

const TwoFA = () => {
  return (
    <div className="auth-form-box">
      <Link to="/" className="d-flex flex-center text-decoration-none mb-4">
        <Logo
          text={false}
          width={58}
          className="fw-bolder fs-5 d-inline-block"
        />
      </Link>
      <TwoFAForm />
    </div>
  );
};

export default TwoFA;
