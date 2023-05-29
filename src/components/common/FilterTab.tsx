import classNames from 'classnames';
import React from 'react';
import { Nav } from 'react-bootstrap';

export interface FilterTabItem {
  label: string;
  count: number;
  active?: boolean;
}

const FilterTab = ({ tabItems }: { tabItems: FilterTabItem[] }) => {
  return (
    <Nav className="nav nav-links">
      {tabItems.map(item => (
        <Nav.Item>
          <Nav.Link href="#!" className={classNames('px-2 py-1', { active: item.active })}>
            {item.label} <span className="text-700 fw-semi-bold">({item.count})</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default FilterTab;
