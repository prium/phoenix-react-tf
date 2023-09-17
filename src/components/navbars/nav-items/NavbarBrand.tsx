import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
import { Navbar } from 'react-bootstrap';
import logo2 from 'assets/img/logos/logo2.png';
import text from 'assets/img/logos/text.png';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import NavbarToggleButton from './NavbarToggleButton';
import { Link } from 'react-router-dom';
import logoSvg from 'assets/img/logos/logo.svg';

const NavbarBrand = () => {
  const {
    config: { navbarTopShape, navbarPosition }
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  return (
    <>
      <div className="navbar-logo">
        {breakpoints.down('lg') && <NavbarToggleButton />}
        <Navbar.Brand
          as={Link}
          to="/"
          className={classNames({
            'me-1 me-sm-3':
              navbarTopShape === 'slim' || navbarPosition === 'horizontal'
          })}
        >
          {navbarTopShape === 'slim' ? (
            <>
              phoenix <span className="text-1000 d-none d-sm-inline">slim</span>
            </>
          ) : (
            <div className="d-flex align-items-center">
              <img src={logo2} alt="phoenix" height={32} />
              {/* <img src={text} alt="phoenix" height={32} /> */}
              {/* <p className="logo-text ms-2 d-none d-sm-block">phoenix</p> */}
            </div>
          )}
        </Navbar.Brand>
      </div>
    </>
  );
};

export default NavbarBrand;
