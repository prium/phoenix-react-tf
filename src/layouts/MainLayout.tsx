import classNames from 'classnames';
import Footer from 'components/layouts/Footer';
import NavbarTopHorizontal from 'components/layouts/navbar/navbar-horizontal/NavbarTopHorizontal';
import NavbarTopDefault from 'components/layouts/navbar/navbar-top/NavbarTopDefault';
import NavbarVertical from 'components/layouts/navbar/navbar-vertical/NavbarVertical';
import { useAppContext } from 'providers/AppProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const {
    config: { navbarPosition }
  } = useAppContext();

  const { contentClass } = useMainLayoutContext();

  return (
    <Container fluid className="px-0">
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && <NavbarVertical />}
      {navbarPosition === 'vertical' && <NavbarTopDefault />}
      {(navbarPosition === 'horizontal' || navbarPosition === 'combo') && <NavbarTopHorizontal />}

      <div className={classNames(contentClass, 'content')}>
        <Outlet />
        <Footer className="position-absolute" />
      </div>
    </Container>
  );
};

export default MainLayout;
