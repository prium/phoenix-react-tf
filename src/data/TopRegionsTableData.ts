import india from 'assets/img/country/india.png';
import china from 'assets/img/country/china.png';
import usa from 'assets/img/country/usa.png';
import southKorea from 'assets/img/country/south-korea.png';
import vietnam from 'assets/img/country/vietnam.png';

export type TopRegionsTableDataType = {
  country: {
    name: string;
    flag: string;
  };
  users: {
    number: number;
    percantage: string;
  };
  transactions: {
    number: number;
    percantage: string;
  };
  revenue: {
    number: number;
    percantage: string;
  };
  convRate: string;
};

export const topRegionsTableData: TopRegionsTableDataType[] = [
  {
    country: {
      name: 'India',
      flag: india
    },
    users: {
      number: 92896,
      percantage: '41.6%'
    },
    transactions: {
      number: 67,
      percantage: '34.3%'
    },
    revenue: {
      number: 7560,
      percantage: '36.9%'
    },
    convRate: '14.01%'
  },
  {
    country: {
      name: 'China',
      flag: china
    },
    users: {
      number: 50496,
      percantage: '32.8%'
    },
    transactions: {
      number: 54,
      percantage: '23.8%'
    },
    revenue: {
      number: 6532,
      percantage: '26.5%'
    },
    convRate: '23.56%'
  },
  {
    country: {
      name: 'USA',
      flag: usa
    },
    users: {
      number: 45679,
      percantage: '24.3%'
    },
    transactions: {
      number: 35,
      percantage: '19.7%'
    },
    revenue: {
      number: 5432,
      percantage: '16.9%'
    },
    convRate: '10.23%'
  },
  {
    country: {
      name: 'South Korea',
      flag: southKorea
    },
    users: {
      number: 36453,
      percantage: '19.7%'
    },
    transactions: {
      number: 22,
      percantage: '9.54%'
    },
    revenue: {
      number: 4673,
      percantage: '11.6%'
    },
    convRate: '8.85%'
  },
  {
    country: {
      name: 'Vietnam',
      flag: vietnam
    },
    users: {
      number: 15007,
      percantage: '11.9%'
    },
    transactions: {
      number: 17,
      percantage: '6.91%'
    },
    revenue: {
      number: 2456,
      percantage: '10.2%'
    },
    convRate: '6.01%'
  }
];
