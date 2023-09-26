import Logo from 'components/common/Logo';
import SignInForm from 'components/modules/auth/SignInForm';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="auth-form-box">
      <Link to="/" className="d-flex flex-center text-decoration-none mb-4">
        <Logo
          text={false}
          width={58}
          className="fw-bolder fs-5 d-inline-block"
        />
      </Link>
      <SignInForm />
    </div>
  );
};

export default SignIn;
