import { snakeCase } from 'helpers/utils';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export type SideNavItem = {
  to: string;
  label: string;
  subItem?: SideNavItem[];
};

interface DocPagesLayoutProps {
  sideNavItems?: SideNavItem[];
}

const DocPagesLayout = ({ children, sideNavItems }: PropsWithChildren<DocPagesLayoutProps>) => {
  const [navItems, setNavItems] = useState<SideNavItem[]>([]);

  useEffect(() => {
    if (sideNavItems) {
      setNavItems(sideNavItems);
    } else {
      const items: any = [];
      const recursiveMap = (children: any) => {
        React.Children.forEach(children, child => {
          if (child.props?.children && child.type?.name !== 'PhoenixDocCardHeader') {
            recursiveMap(child.props.children);
          } else {
            if (child.type?.name === 'PhoenixDocCardHeader') {
              items.push({
                to: snakeCase(child.props.title),
                label: child.props.title
              });
            }
          }
        });
      };
      recursiveMap(children);
      setNavItems(items);
    }
  }, []);

  // console.log({ navItems });

  return (
    <Row className="g-3">
      <Col xs={12} xl={10} className="order-1 order-xl-0">
        {children}
      </Col>
      <Col xs={12} xl={2}>
        <div className="position-sticky mt-xl-4" style={{ top: 80 }}>
          <h5>On this page</h5>
          <hr className="text-300" />
          <Nav as="ul" className="flex-column nav-vertical doc-nav">
            {navItems.map(item => (
              <NavItem item={item} key={item.label} />
            ))}
          </Nav>
        </div>
      </Col>
    </Row>
  );
};

const NavItem = ({ item }: { item: SideNavItem }) => {
  const { hash } = useLocation();

  return (
    <Nav.Item as="li" key={item.to}>
      <Nav.Link active={hash === `#${item.to}`} href={`#${item.to}`}>
        {item.label}
      </Nav.Link>
      {item.subItem && (
        <Nav as="ul" className="flex-column">
          {item.subItem.map(subItem => (
            <NavItem item={subItem} />
          ))}
        </Nav>
      )}
    </Nav.Item>
  );
};

export default DocPagesLayout;
