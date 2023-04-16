import product1 from 'assets/img/products/1.png';
import product2 from 'assets/img/products/2.png';
import product3 from 'assets/img/products/3.png';
import product4 from 'assets/img/products/4.png';
import product5 from 'assets/img/products/5.png';
import product6 from 'assets/img/products/6.png';
import product7 from 'assets/img/products/7.png';
import product8 from 'assets/img/products/8.png';
import product10 from 'assets/img/products/10.png';
import product12 from 'assets/img/products/12.png';
import product16 from 'assets/img/products/16.png';
import product17 from 'assets/img/products/17.png';
import product18 from 'assets/img/products/18.png';
import product24 from 'assets/img/products/24.png';
import product25 from 'assets/img/products/25.png';
import product26 from 'assets/img/products/26.png';
import product27 from 'assets/img/products/27.png';

import blueFront from 'assets/img/products/details/blue_front.png';
import blueBack from 'assets/img/products/details/blue_back.png';
import blueSide from 'assets/img/products/details/blue_side.png';

import redFront from 'assets/img/products/details/red_front.png';
import redBack from 'assets/img/products/details/red_back.png';
import redSide from 'assets/img/products/details/red_side.png';

import greenFront from 'assets/img/products/details/green_front.png';
import greenBack from 'assets/img/products/details/green_back.png';
import greenSide from 'assets/img/products/details/green_side.png';

import purpleFront from 'assets/img/products/details/purple_front.png';
import purpleBack from 'assets/img/products/details/purple_back.png';
import purpleSide from 'assets/img/products/details/purple_side.png';

import silverFront from 'assets/img/products/details/silver_front.png';
import silverBack from 'assets/img/products/details/silver_back.png';
import silverSide from 'assets/img/products/details/silver_side.png';

import yellowFront from 'assets/img/products/details/yellow_front.png';
import yellowBack from 'assets/img/products/details/yellow_back.png';
import yellowSide from 'assets/img/products/details/yellow_side.png';

import orangeFront from 'assets/img/products/details/orange_front.png';
import orangeBack from 'assets/img/products/details/orange_back.png';
import orangeSide from 'assets/img/products/details/orange_side.png';

import review11 from 'assets/img/e-commerce/review-11.jpg';
import review12 from 'assets/img/e-commerce/review-12.jpg';
import review13 from 'assets/img/e-commerce/review-13.jpg';
import review14 from 'assets/img/e-commerce/review-14.jpg';
import review15 from 'assets/img/e-commerce/review-15.jpg';
import review16 from 'assets/img/e-commerce/review-16.jpg';

type Category = {
  title: string;
  icon: string;
  sections: {
    label: string;
    url: string;
  }[];
};

export type Product = {
  id: number;
  image: string;
  name: string;
  rating: number;
  rated?: number;
  price?: number;
  salePrice?: number;
  colors?: number;
  extra?: string;
  extraClass?: string;
  extra2?: string;
  extra2Class?: string;
  verified?: boolean;
  wishListed?: boolean;
  offer?: string;
  dealEndTime?: string;
};

export type SuggestedProductType = {
  id: number;
  checked: boolean;
  img: string;
  name: string;
  price: number;
};

export type ProductReviewType = {
  id: number;
  star: number;
  customer: string;
  date: string;
  review: string;
  images?: string[];
  reply?: {
    text: string;
    from: string;
    time: string;
  };
};

export const categories: Category[] = [
  {
    title: 'Collectibles & Art',
    icon: 'pocket',
    sections: [
      {
        label: 'Collectibles',
        url: '#!'
      },
      {
        label: 'Antiques',
        url: '#!'
      },
      {
        label: 'Sports memorabilia ',
        url: '#!'
      },
      {
        label: 'Art',
        url: '#!'
      }
    ]
  },
  {
    title: 'Home & Gardan',
    icon: 'home',
    sections: [
      {
        label: 'Yard, Garden & Outdoor',
        url: '#!'
      },
      {
        label: 'Crafts',
        url: '#!'
      },
      {
        label: 'Home Improvement',
        url: '#!'
      },
      {
        label: 'Pet Supplies',
        url: '#!'
      }
    ]
  },
  {
    title: 'Sporting Goods',
    icon: 'globe',
    sections: [
      {
        label: 'Outdoor Sports',
        url: '#!'
      },
      {
        label: 'Team Sports',
        url: '#!'
      },
      {
        label: 'Exercise & Fitness',
        url: '#!'
      },
      {
        label: 'Golf',
        url: '#!'
      }
    ]
  },
  {
    title: 'Electronics',
    icon: 'monitor',
    sections: [
      {
        label: 'Computers & Tablets',
        url: '#!'
      },
      {
        label: 'Camera & Photo',
        url: '#!'
      },
      {
        label: 'TV, Audio & Surveillance',
        url: '#!'
      },
      {
        label: 'Cell Ohone & Accessories',
        url: '#!'
      }
    ]
  },
  {
    title: 'Auto Parts & Accessories',
    icon: 'truck',
    sections: [
      {
        label: 'GPS & Security Devices',
        url: '#!'
      },
      {
        label: 'Rader & Laser Detectors',
        url: '#!'
      },
      {
        label: 'Care & Detailing',
        url: '#!'
      },
      {
        label: 'Scooter Parts & Accessories',
        url: '#!'
      }
    ]
  },
  {
    title: 'Toys & Hobbies',
    icon: 'codesandbox',
    sections: [
      {
        label: 'Radio Control',
        url: '#!'
      },
      {
        label: 'Kids Toys',
        url: '#!'
      },
      {
        label: 'Action Figures',
        url: '#!'
      },
      {
        label: 'Dolls & Bears',
        url: '#!'
      }
    ]
  },
  {
    title: 'Fashion',
    icon: 'watch',
    sections: [
      {
        label: 'Women',
        url: '#!'
      },
      {
        label: 'Men',
        url: '#!'
      },
      {
        label: 'Jewelry & Watches',
        url: '#!'
      },
      {
        label: 'Shoes',
        url: '#!'
      }
    ]
  },
  {
    title: 'Musical Instruments & Gear',
    icon: 'music',
    sections: [
      {
        label: 'Guitar',
        url: '#!'
      },
      {
        label: 'Pro Audio Equipment',
        url: '#!'
      },
      {
        label: 'String',
        url: '#!'
      },
      {
        label: 'Stage Lighting & Effects',
        url: '#!'
      }
    ]
  },
  {
    title: 'Other Categories',
    icon: 'grid',
    sections: [
      {
        label: 'Video Games & Consoles',
        url: '#!'
      },
      {
        label: 'Health & Beauty',
        url: '#!'
      },
      {
        label: 'Baby',
        url: '#!'
      },
      {
        label: 'Business & Industrial',
        url: '#!'
      }
    ]
  }
];

export const topDealsProducts: Product[] = [
  {
    id: 1,
    image: product6,
    name: 'PlayStation 5 DualSense Wireless Controller',
    rating: 5,
    rated: 67,
    price: 125,
    salePrice: 89.0,
    colors: 2,
    extra: 'dbrand skin available',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 2,
    image: product1,
    name: 'Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)',
    verified: true,
    rating: 5,
    rated: 74,
    price: 49.99,
    salePrice: 34.99,
    dealEndTime: 'days'
  },
  {
    id: 3,
    image: product2,
    name: 'iPhone 13 pro max-Pacific Blue, 128GB storage',
    rating: 5,
    rated: 33,
    price: 899.99,
    salePrice: 850.99,
    colors: 5,
    extra: 'Stock limited',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 4,
    image: product3,
    name: 'Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray',
    rating: 5,
    rated: 97,
    price: 1299.0,
    salePrice: 1149.0,
    colors: 2,
    extra: 'Apple care included',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 5,
    image: product4,
    name: 'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021',
    rating: 5,
    rated: 134,
    price: 1499,
    salePrice: 1399,
    colors: 7,
    extra: 'Exchange with kidney',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 6,
    image: product5,
    name: 'Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset',
    rating: 5,
    rated: 59,
    salePrice: 59,
    colors: 2
  }
];

export const topElectronicProducts: Product[] = [
  {
    id: 7,
    image: product5,
    name: 'Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset',
    rating: 5,
    rated: 59,
    salePrice: 59,
    colors: 2
  },
  {
    id: 8,
    image: product7,
    name: '2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray',
    rating: 5,
    rated: 13,
    salePrice: 799,
    colors: 2
  },
  {
    id: 9,
    image: product12,
    name: 'HORI Racing Wheel Apex for PlayStation 4/3, and PC',
    rating: 5,
    rated: 64,
    salePrice: 299,
    colors: 1,
    extra: 'Leather cover add-on available',
    extraClass: 'text-1000 fs--1 mb-0 fw-bold',
    extra2: 'supports Windows 11',
    extra2Class: 'text-700 fs--1 mb-2'
  },
  {
    id: 10,
    image: product1,
    name: 'Amazfit T-Rex Pro Smart Watch with GPS, Outdoor Fitness Watch for Men, Military Standard Certified',
    verified: true,
    wishListed: true,
    rating: 5,
    rated: 32,
    salePrice: 20,
    dealEndTime: '24 hours'
  },
  {
    id: 11,
    image: product16,
    name: 'Apple AirPods Pro',
    rating: 5,
    rated: 39,
    salePrice: 59,
    colors: 3,
    extra: 'Free with iPhone 5s',
    extraClass: 'text-1000 fs--1 mb-0 fw-bold',
    extra2: 'Ships to Canada',
    extra2Class: 'text-700 fs--1 mb-2'
  },
  {
    id: 12,
    image: product10,
    name: 'Apple Magic Mouse (Wireless, Rechargable) - Silver',
    rating: 1,
    rated: 6,
    salePrice: 89,
    colors: 2,
    extra: 'Bundle available',
    extraClass: 'text-1000 fs--1 mb-0 fw-bold',
    extra2: 'Charger not included',
    extra2Class: 'text-700 fs--1 mb-2'
  },
  {
    id: 13,
    name: 'Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)',
    image: product8,
    salePrice: 98,
    rating: 3,
    rated: 7,
    colors: 1
  }
];

export const similarProducts: Product[] = [];

export const bestOfferProducts: Product[] = [
  {
    id: 14,
    image: product25,
    name: 'RESPAWN 200 Racing Style Gaming Chair, in Gray RSP 200 GRY',
    offer: '35%',
    rating: 5
  },
  {
    id: 15,
    image: product27,
    name: 'LEVOIT Humidifiers for Bedroom Large Room 6L Warm and Cool Mist for...',
    offer: '18%',
    rating: 4
  },
  {
    id: 16,
    image: product26,
    name: 'NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router with 4 Ethernet Ports...',
    offer: '15%',
    rating: 5
  },
  {
    id: 17,
    image: product18,
    name: 'Rachael Ray Cucina Bakeware Set Includes Nonstick Bread Baking Cookie Sheet...',
    offer: '20%',
    rating: 3.5
  },
  {
    id: 18,
    image: product17,
    name: 'Xbox Series S',
    offer: '12%',
    rating: 5
  },
  {
    id: 19,
    image: product24,
    name: 'FURINNO Computer Writing Desk, Walnut',
    offer: '16%',
    rating: 5
  },
  {
    id: 20,
    name: 'Seagate Portable 2TB External Hard Drive Portable HDD',
    image: product18,
    offer: '15%',
    rating: 4
  }
];

type Variant = {
  id: string;
  name: string;
  thumb: string;
  images: string[];
};

export const productColorVariants: Variant[] = [
  {
    id: 'blue',
    name: 'Blue',
    thumb: blueFront,
    images: [blueFront, blueBack, blueSide]
  },
  {
    id: 'red',
    name: 'Red',
    thumb: redFront,
    images: [redFront, redBack, redSide]
  },
  {
    id: 'green',
    name: 'Green',
    thumb: greenFront,
    images: [greenFront, greenBack, greenSide]
  },
  {
    id: 'purple',
    name: 'Purple',
    thumb: purpleFront,
    images: [purpleFront, purpleBack, purpleSide]
  },
  {
    id: 'silver',
    name: 'Silver',
    thumb: silverFront,
    images: [silverFront, silverBack, silverSide]
  },
  {
    id: 'yellow',
    name: 'Yellow',
    thumb: yellowFront,
    images: [yellowFront, yellowBack, yellowSide]
  },
  {
    id: 'orange',
    name: 'Orange',
    thumb: orangeFront,
    images: [orangeFront, orangeBack, orangeSide]
  }
];

export const suggestedProducts: SuggestedProductType[] = [
  {
    id: 1,
    checked: true,
    img: product2,
    name: 'iPhone 13 pro max-Pacific Blue- 128GB',
    price: 899.99
  },
  {
    id: 2,
    checked: true,
    img: product16,
    name: 'Apple AirPods Pro',
    price: 59.0
  },
  {
    id: 3,
    checked: false,
    img: product10,
    name: 'Apple Magic Mouse (Wireless, Rechargable) - Silver, Worst mouse ever',
    price: 89.0
  }
];

export const productReviews: ProductReviewType[] = [
  {
    id: 1,
    star: 5,
    customer: 'Zingko Kudobum',
    date: '35 mins ago',
    review: '100% satisfied',
    images: [review11, review12, review13],
    reply: {
      text: 'Thank you for your valuable feedback',
      from: 'store',
      time: '5 mins ago'
    }
  },
  {
    id: 2,
    star: 4,
    customer: 'Piere Auguste Renoir',
    date: '23 Oct, 12:09 PM',
    review:
      "Since the spring loaded event, I've been wanting an iMac, and it's exceeded my expectations. The screen is clear, the colors are vibrant (I got the blue one! ), and the performance is more than adequate for my needs as a college student. That's how good it is."
  },
  {
    id: 3,
    star: 3.5,
    customer: 'Abel Kablmann ',
    date: '21 Oct, 12:00 PM',
    review:
      "Over the years, I've preferred Apple products. My job has allowed me to use Windows products on laptops and PCs. I've owned Windows laptops and desktops for home use in the past and will never use them again."
  },
  {
    id: 4,
    star: 5,
    customer: 'Pennywise Alfred',
    date: '35 mins ago',
    review: 'Nice and beautiful product.',
    images: [review14, review15, review16]
  }
];

export interface CartItemType {
  id: number | string;
  name: string;
  image: string;
  color: string;
  price: number;
  size: string;
  quantity: number;
  total: number;
}

export const cartItems: CartItemType[] = [
  {
    id: 1,
    name: 'Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)',
    image: product1,
    color: 'Glossy black',
    price: 199,
    size: 'XL',
    quantity: 2,
    total: 398
  },
  {
    id: 2,
    name: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    image: product2,
    color: 'Glossy black',
    price: 150,
    size: 'XL',
    quantity: 2,
    total: 300
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    image: product3,
    color: 'Glossy Golden',
    price: 65,
    size: '34mm',
    quantity: 2,
    total: 130
  }
];
