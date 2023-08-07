import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useState
} from 'react';
import SearchBox, { SearchBoxProps } from './SearchBox';
import { Dropdown } from 'react-bootstrap';

interface DropdownSearchBoxProps extends SearchBoxProps {}

const DropdownSearchBox = ({
  children,
  ...rest
}: PropsWithChildren<DropdownSearchBoxProps>) => {
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
          inputClassName="rounded-pill"
          value={searchInputValue}
          onChange={({ target }) => setSearchInputValue(target.value)}
          {...rest}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100"
        style={{ width: 400 }}
      >
        {Children.map(children, child =>
          cloneElement(child as ReactElement, { searchValue: searchInputValue })
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSearchBox;
