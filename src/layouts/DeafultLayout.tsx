import NavbarTop from 'components/layouts/navbar/navbar-top/NavbarTop';
import NavbarVertical from 'components/layouts/navbar/navbar-vertical/NavbarVertical';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const DeafultLayout = () => {
  return (
    <Container fluid className="px-0">
      <NavbarVertical />
      <NavbarTop />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export default DeafultLayout;
