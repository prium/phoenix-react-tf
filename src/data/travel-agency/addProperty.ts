import {
  IconDefinition,
  faCartShopping,
  faFire,
  faUmbrellaBeach,
  faUniversalAccess,
  faUtensils,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import gallery59 from 'assets/img/gallery/59.png';
import gallery60 from 'assets/img/gallery/60.png';
import gallery61 from 'assets/img/gallery/61.png';
import gallery62 from 'assets/img/gallery/62.png';
import gallery63 from 'assets/img/gallery/63.png';

export interface AddPropertyWizardFormData {
  propertyName: string;
  propertyDescription: string;
  propertyType: string;
  propertyRating: string;
  contactEmail: string;
  contactNumber: number;
  isPropertyChain: string;
  propertyChain: string;
  isChannelManagement: string;
  channelManagement: string;
  apartment: string;
  state: string;
  country: string;
  city: string;
  zipCode: string;
  wifi: string;
  hotelBar: string;
  restaurant: string;
  commonAreas: string;
  pool: string;
  tennisCourts: string;
  noSmoking: string;
  parking: string;
  bathtub: string;
  beachView: string;
  flatScreenTv: string;
  balcony: string;
  photos: File[];
  paymentCurrency: string;
  paymentMethod: string;
  receivedPayment: string;
  cardType: string;
  cardNumber: string;
  cardHolderName: string;
  commissionPercentage: string;
  invoiceEmail: string;
  cashPayment: string;
  cardPayment: string;
  onlinePayment: string;

  // policy
  checkInType: string;
  checkInStarts: Date;
  checkInEnds: Date;
  ageRegistration: string;
  depositAtCheckin: string;
  documentationAtCheckin: string;
  lateCheckIn: boolean;

  checkinEnd: string;
  checkOutBefore: Date;
  flexibleCheckout: string;
  checkoutType: string;
  checkoutAmount: string;

  refundPolicy: string;
  isFullRefand: string;
  isPartialRefand: string;
  petPolicyType: string;
  petRestictedZone: string;
  petAdditionalCharge: string;
  ageSegment1: number[];
  ageSegment2: number[];
  ageSegment3: number[];
  childDocPolicy: string;

  vat: string;
  taxType: string;
  taxAmount: string;
  DepositAtCheckIn: string;
  gst: string;
  hotelTax: string;
  cityTax: string;
  touristTax: string;
  propertyRegNo: string;
  businessRegNo: string;
  taxpayeerIdNo: string;
}
interface PriceTierInterface {
  id: string;
  name: string;
  className?: string;
}

interface generalAmenitiesInterface {
  title: string;
  eventKey: string;
  icon: IconDefinition;
  innerItems: PriceTierInterface[];
}

export const pictures: string[] = [
  gallery59,
  gallery60,
  gallery61,
  gallery62,
  gallery63
];

const popularAmenities: PriceTierInterface[] = [
  {
    id: 'wifi',
    name: 'Wifi',
    className: 'my-3'
  },
  {
    id: 'breakfast',
    name: 'Breakfast'
  },
  {
    id: 'gym',
    name: 'Gym'
  },
  {
    id: 'swimming',
    name: 'Swimming pool'
  },
  {
    id: 'in-room',
    name: 'In-room coffee/tea'
  },
  {
    id: 'daily-housekeeping',
    name: 'Daily housekeeping'
  },
  {
    id: 'bar',
    name: 'Bar / Lounge'
  },
  {
    id: 'laundry',
    name: 'Laundry'
  },
  {
    id: 'newspaper',
    name: 'newspaper'
  },
  {
    id: 'bicycle',
    name: 'Bicycle'
  },
  {
    id: 'air',
    name: 'Air conditioning'
  },
  {
    id: 'games',
    name: 'Games room'
  },
  {
    id: 'beach',
    name: 'Beach view',
    className: 'mb-0'
  }
];

const FoodAndDrink: PriceTierInterface[] = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    className: 'my-3'
  },
  {
    id: 'bars',
    name: 'Bars'
  },
  {
    id: 'in-room-dining',
    name: 'In Room Dining'
  },
  {
    id: 'family-friendly-dining',
    name: 'Family-Friendly Dining'
  },
  {
    id: 'breakfast-buffet',
    name: 'Breakfast Buffet',
    className: 'mb-0'
  }
];

const OutdoorAndView: PriceTierInterface[] = [
  {
    id: 'garden-or-courtyard',
    name: 'Garden Or Courtyard',
    className: 'my-3'
  },
  {
    id: 'scenic-views',
    name: 'Scenic Views'
  },
  {
    id: 'sunbathing-areas',
    name: 'Sunbathin Aareas'
  },
  {
    id: 'outdoor-lounge-areas',
    name: 'Outdoor Lounge Areas',
    className: 'mb-0'
  }
];

const EntertainmentAndFamily: PriceTierInterface[] = [
  {
    id: 'game-room',
    name: 'Game Room',
    className: 'my-3'
  },
  {
    id: 'play-area',
    name: `Children's Play Area`
  },
  {
    id: 'sports-facilities',
    name: 'Sports Facilities'
  },
  {
    id: 'babysitting-services',
    name: 'Babysitting Services',
    className: 'mb-0'
  }
];

const MediaAndTechnology: PriceTierInterface[] = [
  {
    id: 'high-speed-internet',
    name: 'High Speed Iinternet',
    className: 'my-3'
  },
  {
    id: 'business-center',
    name: `Business Center`
  },
  {
    id: 'video-conferencing',
    name: 'Video Conferencing Facilities'
  },
  {
    id: 'vr',
    name: 'Virtual Reality (VR) Experiences',
    className: 'mb-0'
  }
];

const accessibility: PriceTierInterface[] = [
  {
    id: 'accessible-common-areas',
    name: 'Accessible Common Areas',
    className: 'my-3'
  },
  {
    id: 'accessible-parking-spaces',
    name: `Accessible Parking Spaces`
  },
  {
    id: 'accessible-fitness-center',
    name: 'Accessible Fitness Center'
  },
  {
    id: 'accessible-swimmings-pool',
    name: 'Accessible Swimming Pool',
    className: 'mb-0'
  }
];

export const generalAmenities: generalAmenitiesInterface[] = [
  {
    title: 'Popular amenities',
    eventKey: '0',
    icon: faFire,
    innerItems: popularAmenities
  },
  {
    title: 'Food & Drink',
    eventKey: '1',
    icon: faUtensils,
    innerItems: FoodAndDrink
  },
  {
    title: 'Outdoor & View',
    eventKey: '2',
    icon: faUmbrellaBeach,
    innerItems: OutdoorAndView
  },
  {
    title: 'Entertainment & Family Services',
    eventKey: '3',
    icon: faCartShopping,
    innerItems: EntertainmentAndFamily
  },
  {
    title: 'Media & Technology',
    eventKey: '4',
    icon: faVideo,
    innerItems: MediaAndTechnology
  },
  {
    title: 'Accessibility',
    eventKey: '5',
    icon: faUniversalAccess,
    innerItems: accessibility
  }
];

// summary
export interface PropertyDetails {
  property: string;
  value: string;
}
interface PropertyDetailsWithTitle {
  name: string;
  data: PropertyDetails[];
}
export interface AccordionItemInterface {
  img1: string;
  img2: string;
  title: string;
  eventKey: string;
}
export interface summaryTableProp {
  tableData: PropertyDetails[];
}

export const basicInfo: PropertyDetails[] = [
  {
    property: 'Property name',
    value: 'Phoenix Oasis'
  },
  {
    property: 'Property Information',
    value:
      'Welcome to Phoenix Oasis, where luxury meets tranquility. Our hotel offers lavish accommodations, exquisite dining, rejuvenating spa experiences, and stunning views. Experience opulence redefined in a haven of serenity.'
  },
  {
    property: 'Property type',
    value: 'Hotel'
  },
  {
    property: 'Rating',
    value: '5 Star'
  },
  {
    property: 'Email address',
    value: 'phoenix.oasis@email.com'
  },
  {
    property: 'Mobile number',
    value: '(934) 907-3716'
  },
  {
    property: 'Property chain',
    value: 'Not-available'
  },
  {
    property: 'CMS',
    value: 'Available'
  },
  {
    property: 'CMS provider name',
    value: 'Eagle Eye'
  }
];

export const location: PropertyDetails[] = [
  {
    property: 'Apartment / Street',
    value: '123 Luxe Boulevard'
  },
  {
    property: 'State',
    value: 'Suite 567'
  },
  {
    property: 'Country / Region',
    value: 'United States'
  },
  {
    property: 'City',
    value: 'Sunshine City'
  },
  {
    property: 'Zip code',
    value: 'AZ 85001'
  }
];

export const amenities: PropertyDetails[] = [
  {
    property: 'Wifi',
    value: 'Available'
  },
  {
    property: 'Hotel Bar',
    value: 'Available'
  },
  {
    property: 'Restaurant',
    value: 'Available'
  },
  {
    property: 'Common Areas',
    value: 'Available'
  },
  {
    property: 'Pool',
    value: 'Available'
  },
  {
    property: 'Tennis Courts',
    value: 'Available'
  },
  {
    property: 'No Smoking',
    value: 'Available'
  },
  {
    property: 'Air Conditioning',
    value: 'Available'
  },
  {
    property: 'Parking',
    value: 'Available'
  },
  {
    property: 'Bathtub',
    value: 'Available'
  },
  {
    property: 'Beach View',
    value: 'Available'
  },
  {
    property: 'Flat-screen TV',
    value: 'Available'
  },
  {
    property: 'Balcony',
    value: 'Available'
  }
];

export const financeData: PropertyDetailsWithTitle[] = [
  {
    name: 'Payment from PBM',
    data: [
      {
        property: 'Payment currency',
        value: 'US Dollar'
      },
      {
        property: 'Payment method',
        value: 'Electronic Funds Transfer (EFT)'
      },
      {
        property: 'Received payment',
        value: 'Credit Card'
      },
      {
        property: 'Card type',
        value: 'Visa Debit Card'
      },
      {
        property: 'Card number',
        value: '123 456 7890'
      },
      {
        property: 'Card holder name',
        value: 'Phoenix Oasis '
      },
      {
        property: 'Commission Percentage',
        value: 'Flat 10%'
      },
      {
        property: 'Invoice email',
        value: 'Not-Available'
      }
    ]
  },
  {
    name: 'Payment from Guests (On property)',
    data: [
      {
        property: 'Cash payment',
        value: 'No'
      },
      {
        property: 'Card Payment',
        value: 'No'
      },
      {
        property: 'MFS / Online Payment',
        value: 'No'
      }
    ]
  }
];

export const policiesData: PropertyDetailsWithTitle[] = [
  {
    name: 'Check-in-Policy',
    data: [
      {
        property: 'Check-in type',
        value: 'Limited Check-in'
      },
      {
        property: 'Check-in start',
        value: '09:00 AM'
      },
      {
        property: 'Age Restriction',
        value: 'No'
      },
      {
        property: 'Deposit at Check-in',
        value: 'No'
      },
      {
        property: 'Documentation at Check-in',
        value: 'No'
      },
      {
        property: 'Late check-in',
        value: 'Flat 10%'
      },
      {
        property: 'Check-in end',
        value: '12:00 PM'
      }
    ]
  },
  {
    name: 'Checkout Policy',
    data: [
      {
        property: 'Checkout before',
        value: '11:00 AM'
      },
      {
        property: 'Flexible Checkout',
        value: 'Available'
      },
      {
        property: 'Type',
        value: 'Amount per night'
      },
      {
        property: 'Amount',
        value: '$100.00'
      }
    ]
  },
  {
    name: 'Cancellation Policy',
    data: [
      {
        property: 'Type',
        value: 'Optimal refund'
      },
      {
        property: 'Full refund',
        value: 'No'
      },
      {
        property: 'Partial refund',
        value: 'No'
      }
    ]
  },
  {
    name: 'Pet Policy',
    data: [
      {
        property: 'Type',
        value: 'Allowed'
      },
      {
        property: 'Pet Restricted Zones',
        value: 'Not-Available'
      },
      {
        property: 'Additional Charges',
        value: 'No'
      }
    ]
  },
  {
    name: 'Child Policy',
    data: [
      {
        property: 'Age Segment 1',
        value: '0 - 7 Years'
      },
      {
        property: 'Age Segment 2',
        value: '7 -12 Years'
      },
      {
        property: 'Age Segment 3',
        value: '12 -18 Years'
      },
      {
        property: 'Documentation Requirement',
        value: 'Not-Available'
      }
    ]
  },
  {
    name: 'Included Taxes in your rate',
    data: [
      {
        property: 'Vat',
        value: 'Available'
      },
      {
        property: 'Type',
        value: 'Amount per night'
      },
      {
        property: 'Amount',
        value: '$100.00'
      },
      {
        property: 'Deposit at Check-in',
        value: 'No'
      },
      {
        property: 'GST',
        value: 'No'
      },
      {
        property: 'Hotel tax',
        value: 'No'
      },
      {
        property: 'City / District tax',
        value: 'No'
      },
      {
        property: 'Tourist tax',
        value: 'No'
      }
    ]
  },
  {
    name: 'Your Documentations',
    data: [
      {
        property: 'Property Registration No.',
        value: 'Null'
      },
      {
        property: 'Business Registration No.',
        value: 'Null'
      },
      {
        property: 'Taxpayer Identification No.',
        value: 'Null'
      }
    ]
  }
];
