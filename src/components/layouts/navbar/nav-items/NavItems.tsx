import Avatar from 'components/base/Avatar';
import { Dropdown, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import avatar57 from 'assets/img/team/40x40/57.webp';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import NineDotMenu from './NineDotMenu';
import { useAppContext } from 'providers/AppProvider';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import NotificationDropdownMenu from './NotificationDropdownMenu';

const NavItems = () => {
  const {
    config: { theme, navbarPosition },
    toggleTheme
  } = useAppContext();
  return (
    <div className="navbar-nav navbar-nav-icons flex-row">
      <Nav.Item>
        <Nav.Link onClick={() => toggleTheme()}>
          <div className="theme-control-toggle">
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id="ThemeColor">
                  {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                </Tooltip>
              }
            >
              <div className="theme-control-toggle-label">
                <FeatherIcon icon={theme === 'dark' ? 'moon' : 'sun'} size={16} />
              </div>
            </OverlayTrigger>
          </div>
        </Nav.Link>
      </Nav.Item>
      {(navbarPosition === 'horizontal' || navbarPosition === 'combo') && (
        <Nav.Item>
          <Nav.Link>
            <FeatherIcon icon="search" size={19} style={{ marginBottom: 2 }} />
          </Nav.Link>
        </Nav.Item>
      )}
      <Nav.Item>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle as={Link} to="#!" className="dropdown-caret-none nav-link" variant="">
            <FeatherIcon icon="bell" size={20} />
          </Dropdown.Toggle>
          <NotificationDropdownMenu />
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle as={Link} to="#!" className="dropdown-caret-none nav-link" variant="">
            <svg
              width="16"
              height="16"
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
            className="dropdown-caret-none nav-link pe-0 py-0 lh-1"
            variant=""
          >
            <Avatar src={avatar57} size="l" />
          </Dropdown.Toggle>
          <ProfileDropdownMenu />
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default NavItems;
