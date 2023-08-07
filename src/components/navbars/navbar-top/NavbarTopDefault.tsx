import { Navbar } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import NavItems from 'components/navbars/nav-items/NavItems';
import NavItemsSlim from 'components/navbars/nav-items/NavItemsSlim';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';

const NavbarTopDefault = () => {
  const {
    config: { navbarTopShape, navbarTopAppearance }
  } = useAppContext();

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
            <DropdownSearchBox
              className=" d-none d-lg-block"
              size="sm"
              style={{ width: '25rem' }}
            >
              <SearchResult />
            </DropdownSearchBox>
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
