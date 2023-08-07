import React, { useState } from 'react';
import SearchBox from './SearchBox';
import SearchBoxModal from './SearchBoxModal';
import classNames from 'classnames';

const NavbarTopSearchBox = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <SearchBox
      placeholder="Search..."
      className="navbar-top-search-box d-none d-lg-block"
      inputClassName="rounded-pill"
      size="sm"
      formClassName={classNames({
        show: openDropdown
      })}
      value={searchInputValue}
      onChange={({ target }) => setSearchInputValue(target.value)}
      onClick={() => {
        console.log('sdds');

        setOpenDropdown(!openDropdown);
      }}
    >
      <SearchBoxModal open={openDropdown} />
    </SearchBox>
  );
};

export default NavbarTopSearchBox;
