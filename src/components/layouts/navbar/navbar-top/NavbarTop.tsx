import SearchBox from 'components/common/SearchBox';
import { Navbar } from 'react-bootstrap';
import NavItems from './NavItems';
import logo from 'assets/img/icons/logo.png';
import { useContext } from 'react';
import { AppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavItemsSlim from '../navbar-slim/NavItemsSlim';

const NavbarTop = () => {
  const {
    config: { openNavbarVertical, navbarTopShape },
    setConfig
  } = useContext(AppContext);

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  return (
    <Navbar
      className={classNames('navbar-top', {
        'navbar-slim': navbarTopShape === 'slim'
      })}
      expand
      variant=""
    >
      <div className="navbar-collapse justify-content-between">
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
              'me-1 me-sm-3': navbarTopShape === 'slim'
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

        {navbarTopShape === 'default' ? (
          <>
            <SearchBox
              placeholder="Search..."
              className="navbar-top-search-box d-none d-lg-block"
              inputClassName="rounded-pill"
              size="sm"
              style={{ width: '25rem' }}
            />
            <NavItems />
          </>
        ) : (
          <NavItemsSlim />
        )}
      </div>
    </Navbar>
  );
};

export default NavbarTop;
