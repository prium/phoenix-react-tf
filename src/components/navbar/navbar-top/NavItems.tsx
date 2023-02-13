import Avatar from 'components/base/Avatar';
import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import avatar57 from 'assets/img/team/40x40/57.webp';
import ProfileDropdownMenu from './ProfileDropdownMenu';

const NavItems = () => {
  return (
    <div className="navbar-nav navbar-nav-icons flex-row">
      <Nav.Item>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle className="dropdown-caret-none p-0" variant="">
            <Avatar src={avatar57} size="l" />
          </Dropdown.Toggle>
          <ProfileDropdownMenu />
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default NavItems;
