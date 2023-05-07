import { Dropdown } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import { Route, RouteItems } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { UilAngleRight } from '@iconscout/react-unicons';
import classNames from 'classnames';

const TopNavItem = ({ route }: { route: RouteItems }) => {
  return (
    <Dropdown.Menu as="ul" className="navbar-dropdown-caret">
      {route.pages.map(page => (
        <Fragment key={page.name}>
          {page.pages ? (
            <Fragment key={page.name}>
              {page.flat ? (
                page.pages?.map(page => <TopNavDropdownItem page={page} key={page.name} />)
              ) : (
                <TopNavLooper page={page} />
              )}
            </Fragment>
          ) : (
            <TopNavDropdownItem page={page} />
          )}
        </Fragment>
      ))}
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
        {page.pages?.map(page => (
          <Fragment key={page.name}>
            {page.pages ? <TopNavLooper page={page} /> : <TopNavDropdownItem page={page} />}
          </Fragment>
        ))}
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
                <FontAwesomeIcon icon={page.icon} className="fs-8 ms-1 me-2" />
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

export default TopNavItem;
