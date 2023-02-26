import SearchBox from 'components/common/SearchBox';
import { Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { AppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from '../nav-items/NavbarBrand';
import NavItems from '../nav-items/NavItems';
import NavItemsSlim from '../nav-items/NavItemsSlim';

const NavbarTopDefault = () => {
  const {
    config: { navbarTopShape, navbarTopAppearance }
  } = useContext(AppContext);

  return (
    <Navbar
      className={classNames('navbar-top', {
        'navbar-slim': navbarTopShape === 'slim',
        'navbar-darker': navbarTopAppearance === 'darker'
      })}
      expand
      variant=""
    >
      <div className="navbar-collapse justify-content-between">
        <NavbarBrand />

        {navbarTopShape === 'default' ? (
          <>
            <SearchBox
              placeholder="Search..."
              className="navbar-top-search-box d-none d-lg-block"
              inputClassName="rounded-pill"
              size="sm"
              style={{ width: '25rem' }}
            />
            <NavItems />
          </>
        ) : (
          <NavItemsSlim />
        )}
      </div>
    </Navbar>
  );
};

export default NavbarTopDefault;
