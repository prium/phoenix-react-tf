import Logo from 'components/common/Logo';
import SignUpForm from 'components/modules/auth/SignUpForm';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="auth-form-box">
      <Link to="/" className="d-flex flex-center text-decoration-none mb-4">
        <Logo
          text={false}
          width={58}
          className="fw-bolder fs-5 d-inline-block"
        />
      </Link>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
