import classNames from 'classnames';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

export interface FilterTabItem {
  label: string;
  value: string;
  onClick?: () => void;
  count: number;
}

interface FilterTabProps {
  tabItems: FilterTabItem[];
  className?: string;
}

const FilterTab = ({ tabItems, className }: FilterTabProps) => {
  const [activeItem, setActiveItem] = useState('all');

  const handleClick = (item: FilterTabItem) => {
    setActiveItem(item.value);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <Nav className={classNames(className, 'nav nav-links gap-3')}>
      {tabItems.map(item => (
        <Nav.Item key={item.label}>
          <Nav.Link
            onClick={() => handleClick(item)}
            className={classNames('p-0', { active: activeItem === item.value })}
          >
            {item.label}{' '}
            <span className="text-700 fw-semi-bold">({item.count})</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default FilterTab;
