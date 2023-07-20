import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import icon1 from 'assets/img/spot-illustrations/13.png';
import icon1Dark from 'assets/img/spot-illustrations/dark_13.png';
import icon2 from 'assets/img/spot-illustrations/14.png';
import icon2Dark from 'assets/img/spot-illustrations/dark_14.png';
import icon3 from 'assets/img/spot-illustrations/15.png';
import icon3Dark from 'assets/img/spot-illustrations/dark_15.png';
import icon4 from 'assets/img/spot-illustrations/16.png';
import icon4Dark from 'assets/img/spot-illustrations/dark_16.png';
import { ButtonVariant } from 'components/base/Button';

export const pricingBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Pricing',
    url: '#!',
    active: true
  }
];

interface PricingData {
  title: string;
  icon: string;
  iconDark: string;
  description: string;
  price: string;
  btnVariant: ButtonVariant;
  features: {
    timeline: boolean;
    advanced_search: boolean;
    custom_fields: boolean;
    task_dependencies: boolean;
    private_teams: boolean;
    newBadge: boolean;
  };
}

export const pricingColumnData: PricingData[] = [
  {
    title: 'Learner',
    icon: icon1,
    iconDark: icon1Dark,
    description:
      'For individuals who are interested in giving it a shot first.',
    price: 'Free',
    btnVariant: 'outline-primary',
    features: {
      timeline: true,
      advanced_search: false,
      custom_fields: false,
      task_dependencies: false,
      private_teams: false,
      newBadge: false
    }
  },
  {
    title: 'Starter',
    icon: icon2,
    iconDark: icon2Dark,
    description: 'For teams that need to create project plans with confidence.',
    price: '$14.99',
    btnVariant: 'outline-primary',
    features: {
      timeline: true,
      advanced_search: true,
      custom_fields: false,
      task_dependencies: false,
      private_teams: false,
      newBadge: false
    }
  },
  {
    title: 'Team',
    icon: icon3,
    iconDark: icon3Dark,
    description: 'For teams that need to manage work across initiatives.',
    price: '$49.99',
    btnVariant: 'primary',
    features: {
      timeline: true,
      advanced_search: true,
      custom_fields: true,
      task_dependencies: false,
      private_teams: false,
      newBadge: true
    }
  },
  {
    title: 'Industry',
    icon: icon4,
    iconDark: icon4Dark,
    description: 'For organizations that need additional security and support.',
    price: '$149.99',
    btnVariant: 'outline-primary',
    features: {
      timeline: true,
      advanced_search: true,
      custom_fields: true,
      task_dependencies: true,
      private_teams: true,
      newBadge: true
    }
  }
];
