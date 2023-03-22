import { Dropdown, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useAppContext } from 'providers/AppProvider';
import NavItems from '../nav-items/NavItems';
import { RouteItems, routes } from 'sitemap';
import { capitalize } from 'helpers/utils';
import classNames from 'classnames';
import NavbarBrand from '../nav-items/NavbarBrand';
import NavItemsSlim from '../nav-items/NavItemsSlim';
import TopNavMegaMenu from './TopMavMegaMenu';
import TopNavItem from './TopNavItem';

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
        <ul className="navbar-nav navbar-nav-top">
          {routes.map(route => (
            <DropdownItem route={route} key={route.label} />
          ))}
        </ul>
      </Navbar.Collapse>
      {navbarTopShape === 'default' ? <NavItems /> : <NavItemsSlim />}
    </Navbar>
  );
};

const DropdownItem = ({ route }: { route: RouteItems }) => {
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
      {route.megaMenu ? <TopNavMegaMenu route={route} /> : <TopNavItem route={route} />}
    </Dropdown>
  );
};

export default NavbarTopHorizontal;
