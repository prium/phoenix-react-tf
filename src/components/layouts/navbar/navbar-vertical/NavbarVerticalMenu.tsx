import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Collapse, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Route } from 'sitemap';
import { capitalize } from 'helpers/utils';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

interface NavbarVerticalMenuProps {
  routes: Route[];
  level: number;
}

interface NavItemProps {
  route: Route;
  level: number;
}

const NavItem = ({ route, level }: NavItemProps) => {
  return (
    <Nav.Item as="li">
      <NavLink
        to={route.path!}
        className={({ isActive }) =>
          classNames('nav-link', {
            'label-1': level === 1,
            active: isActive
          })
        }
      >
        <div className="d-flex align-items-center">
          {route.icon ? (
            <>
              <span className="nav-link-icon">
                {route.iconSet === 'font-awesome' ? (
                  // @ts-ignore
                  <FontAwesomeIcon icon={route.icon} className="fs-0 mx-1" />
                ) : (
                  <FeatherIcon icon={route.icon} size={16} />
                )}
              </span>
              <span className="nav-link-text-wrapper">
                <span className="nav-link-text">{capitalize(route.name)}</span>
              </span>
            </>
          ) : (
            <span className="nav-link-text">{capitalize(route.name)}</span>
          )}
        </div>
      </NavLink>
    </Nav.Item>
  );
};

const CollapsableNavItem = ({ route, level }: NavItemProps) => {
  const { pathname } = useLocation();

  const openCollapse = (childrens: any) => {
    const checkLink = (children: any) => {
      if (children.path === pathname) {
        return true;
      }
      return Object.prototype.hasOwnProperty('pages') && route.pages!.some(checkLink);
    };
    return childrens.some(checkLink);
  };

  const [open, setOpen] = useState(openCollapse(route.pages));
  return (
    <>
      <Nav.Link
        onClick={() => setOpen(!open)}
        className={classNames('dropdown-indicator', {
          'label-1': level === 1,
          collapsed: !open
        })}
        aria-expanded={open}
      >
        <div className="d-flex align-items-center">
          <div className="dropdown-indicator-icon">
            <FontAwesomeIcon icon="caret-right" />
          </div>
          {level === 1 && (
            <span className="nav-link-icon">
              <FeatherIcon icon={route.icon} size={16} />
            </span>
          )}
          <span className="nav-link-text">{capitalize(route.name)}</span>
        </div>
      </Nav.Link>
      <div
        className={classNames('parent-wrapper', {
          'label-1': level === 1
        })}
      >
        <Collapse in={open} className="nav parent">
          <div>
            <NavbarVerticalMenu routes={route.pages || []} level={level + 1} />
          </div>
        </Collapse>
      </div>
    </>
  );
};

const NavbarVerticalMenu = ({ routes, level }: NavbarVerticalMenuProps) => {
  return (
    <>
      {routes.map(route => (
        <div key={route.name}>
          {level === 1 ? (
            <div className="nav-item-wrapper">
              {route.pages ? (
                <CollapsableNavItem route={route} level={level} />
              ) : (
                <NavItem route={route} level={level} />
              )}
            </div>
          ) : (
            <>
              {route.pages ? (
                <CollapsableNavItem route={route} level={level} />
              ) : (
                <NavItem route={route} level={level} />
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default NavbarVerticalMenu;
