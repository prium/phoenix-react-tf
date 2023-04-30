// @ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const Content = () => <p>asjhhjsahj</p>;
const tabLinks = [
  {
    id: 'orders',
    label: 'Orders',
    number: 35,
    icon: 'shopping-cart',
    content: <Content />
  },
  {
    id: 'review',
    label: 'Review',
    number: 24,
    icon: 'star',
    content: <Content />
  },
  {
    id: 'wishlist',
    label: 'Wishlist',
    icon: 'heart',
    content: <Content />
  },
  {
    id: 'stores',
    label: 'Stores',
    icon: 'home',
    content: <Content />
  },
  {
    id: 'personal-info',
    label: 'Personal info',
    icon: 'user',
    content: <Content />
  }
];

const ProfileDetailsTab = () => {
  const [key, setKey] = useState('orders');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={k => setKey(k as string)}
      className="mb-3 nav-underline"
    >
      {tabLinks.map(item => (
        <Tab
          eventKey={item.id}
          title={
            <>
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.label}{' '}
              {item.number && <span className="text-700 fw-normal">({item.number})</span>}
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
