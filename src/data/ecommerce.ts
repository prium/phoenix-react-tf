import product1 from 'assets/img/products/1.png';
import product2 from 'assets/img/products/2.png';
import product3 from 'assets/img/products/3.png';
import product4 from 'assets/img/products/4.png';
import product5 from 'assets/img/products/5.png';
import product6 from 'assets/img/products/6.png';

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
  star: number;
  rated: number;
  price: string;
  salePrice: string;
  colors?: number;
  extra?: string;
  extraClass?: string;
  extra2?: string;
  extra2Class?: string;
  verified?: boolean;
  offer?: string;
  dealEndTime?: string;
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

export const products: Product[] = [
  {
    id: 1,
    image: product6,
    name: 'PlayStation 5 DualSense Wireless Controller',
    star: 5,
    rated: 67,
    price: '125.00',
    salePrice: '89.00',
    colors: 2,
    extra: 'dbrand skin available',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 2,
    image: product1,
    name: 'Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)',
    verified: true,
    star: 5,
    rated: 74,
    price: '49.99',
    salePrice: '34.99',
    offer: '16%',
    dealEndTime: 'days'
  },
  {
    id: 3,
    image: product2,
    name: 'iPhone 13 pro max-Pacific Blue, 128GB storage',
    star: 5,
    rated: 33,
    price: '899.99',
    salePrice: '850.99',
    colors: 5,
    extra: 'Stock limited',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 4,
    image: product3,
    name: 'Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray',
    star: 5,
    rated: 97,
    price: '1299.00',
    salePrice: '1149.00',
    colors: 2,
    extra: 'Apple care included',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 5,
    image: product4,
    name: 'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021',
    star: 5,
    rated: 134,
    price: '1499.00',
    salePrice: '1399.00',
    colors: 7,
    extra: 'Exchange with kidney',
    extraClass: 'text-1000 fw-bold mb-2'
  },
  {
    id: 6,
    image: product5,
    name: 'Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset',
    star: 5,
    rated: 59,
    price: '59.00',
    salePrice: '59.00',
    colors: 2
  }
];
