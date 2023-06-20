import illustration22 from 'assets/img/spot-illustrations/22_2.png';
import illustration22dark from 'assets/img/spot-illustrations/dark_22.png';
import illustration23 from 'assets/img/spot-illustrations/23_2.png';
import illustration23dark from 'assets/img/spot-illustrations/dark_23.png';
import illustration24 from 'assets/img/spot-illustrations/24_2.png';
import illustration24dark from 'assets/img/spot-illustrations/dark_24.png';

export type Feature = {
  lightImage: string;
  darkImage: string;
  label: string;
  title: string;
  details: string;
  link: string;
};

export const defaultFeatures: Feature[] = [
  {
    lightImage: illustration22,
    darkImage: illustration22dark,
    label: 'SIGNAL',
    title: ' Recieve the signals instantly',
    details:
      'Phoenix makes it possible for you to quickly and effectively receive every signal. No need for drawn-out waiting.',
    link: '#!'
  },
  {
    lightImage: illustration23,
    darkImage: illustration23dark,
    label: 'REVENUE',
    title: 'See Your Revenue Grow',
    details:
      'Grow with Phoenix. We help you with everything you might need., We make it easy and keep it simple.',
    link: '#!'
  },
  {
    lightImage: illustration24,
    darkImage: illustration24dark,
    label: 'REPORTS',
    title: 'Get Reports Ready',
    details:
      'With Phoenix, you can get ready reports on your growth analysis anytime. This dashboard also has all filters accessible according to your needs.',
    link: '#!'
  }
];
