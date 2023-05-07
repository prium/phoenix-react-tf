import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return <Navigate to="/pages/starter" replace={true} />;
};

export default HomePage;
