import { Dropdown, Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'providers/AppProvider';
import NavItems from '../navbar-top/NavItems';
import { Route, RouteItems, routes } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';

const DropdownToggle = ({ route }: { route: RouteItems }) => {
  const Icon = route.icon;
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      as="li"
      show={show}
      className="nav-item"
      key={route.label}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Dropdown.Toggle
        as="a"
        variant=""
        className="nav-link dropdown-caret-none lh-1 d-flex align-items-center cursor-pointer"
      >
        <Icon className="me-2" size={16} />
        <span>{capitalize(route.horizontalNavLabel ? route.horizontalNavLabel : route.label)}</span>
      </Dropdown.Toggle>

      <TopNavItem route={route} />
    </Dropdown>
  );
};

const TopNavItem = ({ route }: { route: RouteItems }) => {
  return (
    <Dropdown.Menu className="navbar-dropdown-caret">
      {route.pages.map(page => (
        <TopNavDropdownItem page={page} />
      ))}
    </Dropdown.Menu>
  );
};

const TopNavDropdownItem = ({ page }: { page: Route }) => {
  return (
    <li>
      <Dropdown.Item as={Link} to="#!">
        <div className="dropdown-item-wrapper">
          {page.iconSet === 'font-awesome' ? (
            // @ts-ignore
            <FontAwesomeIcon icon={page.icon} className="fs-0 ms-1 me-2" />
          ) : (
            <FeatherIcon icon={page.icon} size={14} className="me-2" />
          )}
          {capitalize(page.name)}
        </div>
      </Dropdown.Item>
    </li>
  );
};

const NavbarHorizontal = () => {
  const {
    config: { openNavbarVertical },
    setConfig
  } = useContext(AppContext);

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  useEffect(() => {
    document.documentElement.classList.add('navbar-horizontal');
    return () => {
      document.documentElement.classList.remove('navbar-horizontal');
    };
  }, []);

  return (
    <Navbar className="navbar-top" id="navbar-fe" expand="lg" variant="">
      <div className="navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <Navbar.Toggle
            className="hover-bg-transparent navbar-toggler-humburger-icon"
            onClick={toggleOpenNavbarVertical}
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Brand href="#!" className="me-1 me-sm-3">
            <div className="d-flex align-items-center">
              <img src={logo} alt="phoenix" width={27} />
              <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
            </div>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse
          className="navbar-top-collapse order-1 order-lg-0 justify-content-center"
          in={openNavbarVertical}
        >
          <ul className="navbar-nav navbar-nav-top">
            {routes.map(route => (
              <DropdownToggle route={route} />
            ))}
          </ul>
        </Navbar.Collapse>

        <NavItems />
      </div>
    </Navbar>
  );
};

export default NavbarHorizontal;
