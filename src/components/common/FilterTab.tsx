import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

export interface FilterTabItem {
  label: string;
  value: string;
  columnId: string;
  count: number;
}

const FilterTab = ({ tabItems }: { tabItems: FilterTabItem[] }) => {
  const { getColumn } = useAdvanceTableContext();
  const [activeItem, setActiveItem] = useState('all');

  const handleClick = (item: FilterTabItem) => {
    const column = getColumn(item.columnId);
    column?.setFilterValue(item.value === 'all' ? '' : item.value);
    setActiveItem(item.value);
  };

  return (
    <Nav className="nav nav-links gap-3">
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
