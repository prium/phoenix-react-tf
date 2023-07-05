import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EcomProfilePersonalInfo from 'components/forms/EcomProfilePersonalInfo';
import EcomProfileOrdersTable from 'components/tables/EcomProfileOrdersTable';
import EcomProfileReviewsTable from 'components/tables/EcomProfileReviewsTable';
import EcomProfileStoresTable from 'components/tables/EcomProfileStoresTable';
import EcomWishlistTable from 'components/tables/EcomWishlistTable';
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

interface TabLink {
  id: string;
  label: string;
  number?: number;
  icon: IconProp;
  content: JSX.Element;
}

const tabLinks: TabLink[] = [
  {
    id: 'orders',
    label: 'Orders',
    number: 35,
    icon: 'shopping-cart',
    content: <EcomProfileOrdersTable />
  },
  {
    id: 'review',
    label: 'Reviews',
    number: 24,
    icon: 'star',
    content: <EcomProfileReviewsTable />
  },
  {
    id: 'wishlist',
    label: 'Wishlist',
    icon: 'heart',
    content: <EcomWishlistTable />
  },
  {
    id: 'stores',
    label: 'Stores',
    icon: 'home',
    content: <EcomProfileStoresTable />
  },
  {
    id: 'personal-info',
    label: 'Personal info',
    icon: 'user',
    content: <EcomProfilePersonalInfo />
  }
];

const ProfileDetailsTab = () => {
  const [key, setKey] = useState('orders');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={k => setKey(k as string)}
      className="mb-3 pb-1 gap-3 nav-underline"
    >
      {tabLinks.map(item => (
        <Tab
          key={item.id}
          eventKey={item.id}
          title={
            <>
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.label}{' '}
              {item.number && (
                <span className="text-700 fw-normal">({item.number})</span>
              )}
            </>
          }
        >
          {item.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default ProfileDetailsTab;
