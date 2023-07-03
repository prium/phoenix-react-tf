import { Dropdown, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import NineDotMenu from 'components/layouts/navbar/nav-items/NineDotMenu';
import ProfileDropdownMenu from 'components/layouts/navbar/nav-items/ProfileDropdownMenu';
import NotificationDropdownMenu from 'components/layouts/navbar/nav-items/NotificationDropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggler from 'components/common/ThemeToggler';

const NavItemsSlim = () => {
  return (
    <div className="navbar-nav navbar-nav-icons flex-row">
      <Nav.Item>
        <ThemeToggler slim />
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
            Olivia <FontAwesomeIcon icon="chevron-down" className="fs-10" />
          </Dropdown.Toggle>
          <ProfileDropdownMenu />
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default NavItemsSlim;
