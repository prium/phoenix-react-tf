import { icon } from '@fortawesome/fontawesome-svg-core';
import {
  Icon,
  UilEstate,
  UilMobileAndroid,
  UilMonitor,
  UilShoppingBag,
  UilStar,
  UilWatchAlt
} from '@iconscout/react-unicons';
import React from 'react';
import { Link } from 'react-router-dom';

type Category = {
  label: string;
  bgClass?: string;
  icon: JSX.Element;
  iconClass?: string;
  selected?: boolean;
};

const categories: Category[] = [
  {
    label: 'Deals',
    bgClass: 'bg-warning-100 light',
    icon: <UilStar className="text-warning" size={40} />
  },
  {
    label: 'Grocery',
    icon: <UilShoppingBag size={40} />
  },
  {
    label: 'Fashion',
    icon: <UilWatchAlt size={40} />
  },
  {
    label: 'Mobile',
    icon: <UilMobileAndroid size={40} />
  },
  {
    label: 'Electronics',
    icon: <UilMonitor size={40} />
  },
  {
    label: 'Home',
    icon: <UilEstate size={40} />
  }
  // {
  //   label: 'Dining',
  //   icon: 'uil uil-lamp',
  //   iconClass: 'text-900'
  // },
  // {
  //   label: 'Gifts',
  //   icon: 'uil uil-gift',
  //   iconClass: 'text-900'
  // },
  // {
  //   label: 'Tools',
  //   icon: 'uil uil-wrench',
  //   iconClass: 'text-900'
  // },
  // {
  //   label: 'Travel',
  //   icon: 'uil uil-plane-departure',
  //   iconClass: 'text-900'
  // },
  // {
  //   label: 'Others',
  //   icon: 'uil uil-palette',
  //   iconClass: 'text-900'
  // }
];

const EcomCategoryNavs = () => {
  return (
    <div className="d-flex justify-content-between">
      {categories.map(category => (
        <EcomCategoryNavItem category={category} />
      ))}
    </div>
  );
};

const EcomCategoryNavItem = ({ category }: { category: Category }) => {
  return (
    <Link to="#!" className="icon-nav-item">
      <div className="icon-container mb-2">{category.icon}</div>
      <p className="nav-label">{category.label}</p>
    </Link>
  );
};

export default EcomCategoryNavs;
