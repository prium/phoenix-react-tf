import pie from 'assets/img/icons/illustrations/pie.png';
import bolt from 'assets/img/icons/illustrations/bolt.png';
import edit from 'assets/img/icons/illustrations/edit.png';
import shield from 'assets/img/icons/illustrations/shield.png';

export type Feature = {
  icon?: string;
  label: string;
  newBadge?: boolean;
};

export type Pricing = {
  icon: string;
  category: string;
  price: number;
  features: Feature[];
};

export const pricingItems: Pricing[] = [
  {
    icon: pie,
    category: 'Starter',
    price: 6,
    features: [
      {
        icon: 'check',
        label: 'Timeline'
      },
      {
        icon: 'check',
        label: 'Advanced Search'
      },
      {
        label: 'Custom fields',
        newBadge: true
      },
      {
        label: 'Task dependencies'
      },
      {
        label: 'Private teams & projects'
      }
    ]
  },
  {
    icon: bolt,
    category: 'Team',
    price: 12,
    features: [
      {
        icon: 'check',
        label: 'Timeline'
      },
      {
        icon: 'check',
        label: 'Advanced Search'
      },
      {
        icon: 'check',
        label: 'Custom fields',
        newBadge: true
      },
      {
        label: 'Task dependencies'
      },
      {
        label: 'Private teams & projects'
      }
    ]
  },
  {
    icon: edit,
    category: 'Business',
    price: 23,
    features: [
      {
        icon: 'check',
        label: 'Timeline'
      },
      {
        icon: 'check',
        label: 'Advanced Search'
      },
      {
        icon: 'check',
        label: 'Custom fields',
        newBadge: true
      },
      {
        icon: 'star',
        label: 'Task dependencies'
      },
      {
        label: 'Private teams & projects'
      }
    ]
  },
  {
    icon: shield,
    category: 'Enterprise',
    price: 40,
    features: [
      {
        icon: 'check',
        label: 'Timeline'
      },
      {
        icon: 'check',
        label: 'Advanced Search'
      },
      {
        icon: 'check',
        label: 'Custom fields',
        newBadge: true
      },
      {
        icon: 'star',
        label: 'Task dependencies'
      },
      {
        icon: 'star',
        label: 'Private teams & projects'
      }
    ]
  }
];
