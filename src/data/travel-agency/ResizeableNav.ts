interface ResizeableNavItem {
  id: number;
  label: string;
  url: string;
}

export interface ResizeableNav {
  navItems: ResizeableNavItem[];
}

export const landingNavItems: ResizeableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/flight/homepage'
  },
  {
    id: 2,
    label: 'Checkout',
    url: '/apps/travel-agency/hotel/customer/checkout'
  }
];

export const hotelNavItems: ResizeableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/hotel/customer/homepage/'
  },
  {
    id: 2,
    label: 'Hotel Details',
    url: '/apps/travel-agency/hotel/customer/hotel-details/'
  },
  {
    id: 3,
    label: 'Hotel Compare',
    url: '/apps/travel-agency/hotel/customer/hotel-compare/'
  },
  {
    id: 4,
    label: 'Checkout',
    url: '/apps/travel-agency/hotel/customer/checkout/'
  },
  {
    id: 5,
    label: 'Payment',
    url: '/apps/travel-agency/hotel/customer/payment/'
  },
  {
    id: 6,
    label: 'Gallery',
    url: '/apps/travel-agency/hotel/customer/gallery/'
  }
];

export const flightNavItems: ResizeableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/flight/homepage/'
  },
  {
    id: 2,
    label: 'Booking',
    url: '/apps/travel-agency/flight/booking/'
  },
  {
    id: 3,
    label: 'Payment',
    url: '/apps/travel-agency/flight/payment/'
  }
];

export const tripNavItems: ResizeableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '#!'
  },
  {
    id: 2,
    label: 'Trip Details',
    url: '#!'
  },
  {
    id: 3,
    label: 'Checkout',
    url: '#!'
  }
];
