import React, { useState } from 'react';
import SearchBox from './SearchBox';
import SearchBoxModal from './SearchBoxModal';
import { Dropdown } from 'react-bootstrap';

const NavbarTopSearchBox = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <Dropdown
      className="navbar-top-search-box"
      onToggle={() => setOpenDropdown(!openDropdown)}
    >
      <Dropdown.Toggle
        as="div"
        data-toggle="dropdown"
        aria-expanded={openDropdown}
        bsPrefix="toggle"
      >
        <SearchBox
          placeholder="Search..."
          className=" d-none d-lg-block"
          inputClassName="rounded-pill"
          size="sm"
          value={searchInputValue}
          style={{ width: '25rem' }}
          onChange={({ target }) => setSearchInputValue(target.value)}
        />
      </Dropdown.Toggle>
      <SearchBoxModal searchValue={searchInputValue} />
    </Dropdown>
  );
};

export default NavbarTopSearchBox;
