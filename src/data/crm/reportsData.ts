export interface Report {
  id: number;
  title: string;
  subTitle: string;
  priority: {
    label: string;
    type: string;
  };
  reportsby: string;
  reports: string;
  date: string;
}

export const reports: Report[] = [
  {
    id: 1,
    title: 'Purchasers and sellers',
    subTitle: 'Purchasing-Related Vendors',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports by email',
    reports: 'Sales Reports',
    date: 'Dec 30, 2022'
  },
  {
    id: 2,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports by email',
    reports: 'HR Reports',
    date: 'Dec 20, 2022'
  },
  {
    id: 3,
    title: 'Category Products',
    subTitle: 'Based on the percentage of recipients',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reports on Sales Orders',
    reports: 'Marketing Reports',
    date: 'Dec 28, 2022'
  },
  {
    id: 4,
    title: 'Current Deals',
    subTitle: 'Sales for Today',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reviews of Products',
    reports: 'Sales Reports',
    date: 'Dec 28, 2022'
  },
  {
    id: 5,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Low',
      type: 'info'
    },
    reportsby: 'Reports by email',
    reports: 'Hr Reports',
    date: 'Dec 27, 2022'
  },
  {
    id: 6,
    title: 'Current Deals',
    subTitle: 'Sums up the many existing businesses.',
    priority: {
      label: 'Low',
      type: 'info'
    },
    reportsby: 'Reports by email',
    reports: 'Service Reports',
    date: 'Dec 26, 2022'
  },
  {
    id: 7,
    title: 'Lost of Deals',
    subTitle: 'Emails sent by users to all records,',
    priority: {
      label: 'High',
      type: 'warning'
    },
    reportsby: 'Reports on Deals',
    reports: 'Sales Reports',
    date: 'Dec 25, 2022'
  },
  {
    id: 8,
    title: 'Important Accounts',
    subTitle: 'Contracts closed by a salesman',
    priority: {
      label: 'Low',
      type: 'info'
    },
    reportsby: 'Reports on Deals',
    reports: 'Marketing Reports',
    date: 'Dec 25, 2022'
  },
  {
    id: 9,
    title: 'Analytics for Email',
    subTitle: 'Based on Status Sales Orders',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reviews of Products',
    reports: 'Sales Reports',
    date: 'Dec 24, 2022'
  },
  {
    id: 10,
    title: 'Types of Deals',
    subTitle: 'Products support will stop this month',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reports by email',
    reports: 'Marketing Reports',
    date: 'Dec 23, 2022'
  },
  {
    id: 11,
    title: 'Category Products',
    subTitle: 'Based on the percentage of recipients',
    priority: {
      label: 'High',
      type: 'warning'
    },
    reportsby: 'Reports on Sales Orders',
    reports: 'Marketing Reports',
    date: 'Dec 22, 2022'
  },
  {
    id: 12,
    title: 'Current Sales',
    subTitle: 'Sales for Today',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reviews of Products',
    reports: 'Sales Reports',
    date: 'Dec 22, 2022'
  },
  {
    id: 13,
    title: 'Important Accounts',
    subTitle: 'Contracts closed by a salesman',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports on Deals',
    reports: 'Marketing Reports',
    date: 'Dec 21, 2022'
  },
  {
    id: 14,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports by email',
    reports: 'Hr Reports',
    date: 'Dec 20, 2022'
  }
];
