import { Dropdown, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import NineDotMenu from 'components/layouts/navbar/nav-items/NineDotMenu';
import ProfileDropdownMenu from 'components/layouts/navbar/nav-items/ProfileDropdownMenu';
import NotificationDropdownMenu from 'components/layouts/navbar/nav-items/NotificationDropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItemsSlim = () => {
  const {
    config: { theme },
    toggleTheme
  } = useAppContext();
  return (
    <div className="navbar-nav navbar-nav-icons flex-row">
      <Nav.Item>
        <Nav.Link className="p-0" onClick={() => toggleTheme()}>
          <div className="theme-control-toggle">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="ThemeColor">Swith theme</Tooltip>}
            >
              <div className="theme-control-toggle theme-control-toggle-slim pe-2">
                <div className="theme-control-toggle-label">
                  <FeatherIcon
                    className="me-1"
                    icon={theme === 'dark' ? 'moon' : 'sun'}
                    size={10}
                  />
                  <span className="fs--1 fw-bold">{theme === 'dark' ? 'Dark' : 'Light'}</span>
                </div>
              </div>
            </OverlayTrigger>
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FeatherIcon icon="search" size={12} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle
            as={Link}
            to="#!"
            className="dropdown-caret-none nav-link py-0"
            variant=""
          >
            <FeatherIcon icon="bell" size={12} />
          </Dropdown.Toggle>
          <NotificationDropdownMenu />
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle
            as={Link}
            to="#!"
            className="dropdown-caret-none nav-link py-0"
            variant=""
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
              <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
              <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
              <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
              <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
              <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
              <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
              <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
            </svg>
          </Dropdown.Toggle>
          <NineDotMenu />
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle
            as={Link}
            to="#!"
            className="dropdown-caret-none nav-link pe-0 py-0"
            variant=""
          >
            Olivia <FontAwesomeIcon icon="chevron-down" className="fs--2" />
          </Dropdown.Toggle>
          <ProfileDropdownMenu />
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default NavItemsSlim;
