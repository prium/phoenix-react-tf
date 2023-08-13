import { Navbar } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import NavItemsSlim from 'components/navbars/nav-items/NavItemsSlim';
import NavItems from 'components/navbars/nav-items/NavItems';
import NavbarTopNav from './NavbarTopNav';

const NavbarTopHorizontal = () => {
  const {
    config: { openNavbarVertical, navbarTopShape, navbarTopAppearance }
  } = useAppContext();

  return (
    <Navbar
      className={classNames('navbar-top', {
        'navbar-slim': navbarTopShape === 'slim',
        'navbar-darker': navbarTopAppearance === 'darker'
      })}
      expand="lg"
      variant=""
    >
      <NavbarBrand />
      <Navbar.Collapse
        className="navbar-top-collapse order-1 order-lg-0 justify-content-center"
        in={openNavbarVertical}
      >
        <NavbarTopNav />
      </Navbar.Collapse>
      {navbarTopShape === 'default' ? <NavItems /> : <NavItemsSlim />}
    </Navbar>
  );
};

export default NavbarTopHorizontal;
