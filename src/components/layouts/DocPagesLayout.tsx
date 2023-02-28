import { snakeCase } from 'helpers/utils';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

type NavItem = {
  to: string;
  label: string;
};

interface DocPagesLayoutProps {
  navItems?: NavItem[];
}

const DocPagesLayout = ({ children }: PropsWithChildren<DocPagesLayoutProps>) => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  useEffect(() => {
    const items: any = [];
    const recursiveMap = (children: any) => {
      React.Children.forEach(children, child => {
        if (child.props?.children) {
          recursiveMap(child.props.children);
        } else {
          if (child.type.name === 'PhoenixDocCardHeader') {
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
  }, []);

  console.log({ navItems });

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
              <Nav.Item as="li" key={item.to}>
                <Nav.Link href={`#${item.to}`}>{item.label}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </Col>
    </Row>
  );
};

export default DocPagesLayout;
