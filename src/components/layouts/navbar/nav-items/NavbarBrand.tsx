import classNames from 'classnames';
import { AppContext } from 'providers/AppProvider';
import { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';

const NavbarBrand = () => {
  const {
    config: { openNavbarVertical, navbarTopShape, navbarPosition },
    setConfig
  } = useContext(AppContext);

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  return (
    <>
      <div className="navbar-logo">
        <Navbar.Toggle
          className="hover-bg-transparent navbar-toggler-humburger-icon"
          onClick={toggleOpenNavbarVertical}
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </Navbar.Toggle>
        <Navbar.Brand
          href="/"
          className={classNames({
            'me-1 me-sm-3': navbarTopShape === 'slim' || navbarPosition === 'horizontal'
          })}
        >
          {navbarTopShape === 'slim' ? (
            <>
              phoenix <span className="text-1000 d-none d-sm-inline">slim</span>
            </>
          ) : (
            <div className="d-flex align-items-center">
              <img src={logo} alt="phoenix" width={27} />
              <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
            </div>
          )}
        </Navbar.Brand>
      </div>
    </>
  );
};

export default NavbarBrand;
