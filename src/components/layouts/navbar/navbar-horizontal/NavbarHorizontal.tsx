// @ts-nocheck
import { Col, Dropdown, Navbar, Row } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'providers/AppProvider';
import NavItems from '../navbar-top/NavItems';
import { Route, RouteItems, routes } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { UilAngleRight } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Scrollbar from 'components/base/Scrollbar';

const DropdownToggle = ({ route }: { route: RouteItems }) => {
  const Icon = route.icon;
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      as="li"
      show={show}
      // show
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

const TopNavMegaMenu = ({ route }: { route: RouteItems }) => {
  const columns = [[], [], []];

  route.pages.forEach((page, index) => {
    if ([0, 1, 2].includes(index)) {
      columns[1].push(page);
    }
    if (index === 3) {
      columns[0].push(page);
    }
    if (index === 4) {
      columns[2].push(page);
    }
  });

  return (
    <Dropdown.Menu as="ul" className=" navbar-dropdown-caret dropdown-menu-card py-0">
      <div className="border-0" style={{ maxHeight: '60vh' }}>
        <Scrollbar>
          <div className="px-3 pt-4 pb-3 img-dropdown">
            <Row className="gx-4 gy-5">
              {columns.map(column => (
                <Col xs={12} sm={6} md={4}>
                  {column.map((page, index) => (
                    <>
                      <div
                        className={classNames('dropdown-item-group', {
                          'mt-5': index > 0
                        })}
                      >
                        <FeatherIcon icon={page.icon} size={16} className="me-2" />
                        <h6 className="dropdown-item-title">{capitalize(page.name)}</h6>
                      </div>
                      <TopNavMegaMenuIitemsLooper page={page} />
                    </>
                  ))}
                </Col>
              ))}
            </Row>
          </div>
        </Scrollbar>
      </div>
    </Dropdown.Menu>
  );
};

const TopNavMegaMenuIitemsLooper = ({ page }) => {
  return page.pages.map(page =>
    page.pages ? (
      <TopNavMegaMenuIitemsLooper page={page} />
    ) : (
      <Link className="dropdown-link">{capitalize(page.name)}</Link>
    )
  );
};

const TopNavItem = ({ route }: { route: RouteItems }) => {
  return (
    <Dropdown.Menu as="ul" className="navbar-dropdown-caret">
      {route.pages.map(page =>
        page.pages ? (
          // <div key={page.name}>
          <>
            {page.flat ? (
              page.pages?.map(page => <TopNavDropdownItem page={page} key={page.pathName} />)
            ) : (
              <TopNavLooper page={page} />
            )}
          </>
        ) : (
          <TopNavDropdownItem page={page} />
        )
      )}
    </Dropdown.Menu>
  );
};

const TopNavLooper = ({ page }: { page: Route }) => {
  const [show, setShow] = useState(false);
  return (
    <Dropdown
      as="li"
      show={show}
      className={classNames({
        'dropdown-inside': page.dropdownInside
      })}
      // onMouseEnter={() => {
      //   if (!page.dropdownInside) {
      //     setShow(true);
      //   }
      // }}
      // onMouseLeave={() => {
      //   if (!page.dropdownInside) {
      //     setShow(false);
      //   }
      // }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Dropdown.Toggle
        as="a"
        variant=""
        className="dropdown-item dropdown-caret-none lh-1 d-flex align-items-center cursor-pointer"
      >
        <div className="dropdown-item-wrapper">
          <UilAngleRight className="lh-1 dropdown-indicator-icon" size={16} />
          <span>
            <FeatherIcon icon={page.icon} size={16} className="me-2" />
            {capitalize(page.name)}
          </span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu as="ul">
        {page.pages?.map(page =>
          page.pages ? <TopNavLooper page={page} /> : <TopNavDropdownItem page={page} />
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const TopNavDropdownItem = ({ page }: { page: Route }) => {
  return (
    <li>
      <Dropdown.Item as={Link} to="#!">
        <div className="dropdown-item-wrapper">
          {page.icon && (
            <>
              {page.iconSet === 'font-awesome' ? (
                // @ts-ignore
                <FontAwesomeIcon icon={page.icon} className="fs-0 ms-1 me-2" />
              ) : (
                <FeatherIcon icon={page.icon} size={14} className="me-2" />
              )}
            </>
          )}
          {page.topNavIcon && <FeatherIcon icon={page.topNavIcon} size={14} className="me-2" />}
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
              <DropdownToggle route={route} key={route.label} />
            ))}
          </ul>
        </Navbar.Collapse>

        <NavItems />
      </div>
    </Navbar>
  );
};

export default NavbarHorizontal;
