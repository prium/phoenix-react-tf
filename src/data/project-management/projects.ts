import team1 from 'assets/img/team/24x24/1.webp';
import team5 from 'assets/img/team/24x24/5.webp';
import team9 from 'assets/img/team/24x24/9.webp';
import team11 from 'assets/img/team/24x24/11.webp';
import team12 from 'assets/img/team/24x24/12.webp';
import team13 from 'assets/img/team/24x24/13.webp';
import team25 from 'assets/img/team/24x24/25.webp';
import team32 from 'assets/img/team/24x24/32.webp';
import team21 from 'assets/img/team/24x24/21.webp';
import team22 from 'assets/img/team/24x24/22.webp';
import team23 from 'assets/img/team/24x24/23.webp';
import team28 from 'assets/img/team/24x24/28.webp';
import team34 from 'assets/img/team/24x24/34.webp';
import team59 from 'assets/img/team/24x24/59.webp';
import team30 from 'assets/img/team/24x24/30.webp';
import team31 from 'assets/img/team/24x24/31.webp';
import bg51 from 'assets/img/generic/51.png';
import bg52 from 'assets/img/generic/52.png';
import bg53 from 'assets/img/generic/53.png';
import bg54 from 'assets/img/generic/54.png';
import bg55 from 'assets/img/generic/55.png';
import bg56 from 'assets/img/generic/56.png';
import bg57 from 'assets/img/generic/57.png';

import { BadgeBg } from 'components/base/Badge';

export interface Status {
  ongoing: number;
  critical: number;
  inactive: number;
  completed: number;
}

export interface Project {
  name: string;
  start: string;
  deadline: string;
  calculation?: {
    amount: string;
    label: string;
  };
  assigness: (string | null)[];
  progress: {
    min: number;
    max: number;
  };
  task: number;
  statusProgress: Status;
  status: {
    label: string;
    type: BadgeBg;
  };
  bg: string;
}

export const projects: Project[] = [
  {
    name: 'Making the Butterflies shoot each other dead',
    start: 'Dec 12, 2018',
    deadline: 'Dec 12, 2026',
    calculation: {
      amount: '$4',
      label: 'Cost'
    },
    assigness: [team9, team25, null, team32, team22, team28, null],
    progress: {
      min: 145,
      max: 145
    },
    statusProgress: {
      ongoing: 30,
      critical: 5,
      inactive: 45,
      completed: 15
    },
    task: 287,
    status: {
      label: 'completed',
      type: 'success'
    },
    bg: bg51
  },
  {
    name: 'Project Doughnut Dungeon',
    assigness: [team22, team28],
    start: 'Jan 9, 2019',
    deadline: 'Dec 9, 2022',
    progress: {
      min: 148,
      max: 223
    },
    statusProgress: {
      ongoing: 20,
      critical: 15,
      inactive: 45,
      completed: 30
    },
    task: 125,
    status: {
      label: 'inactive',
      type: 'success'
    },
    bg: bg52
  },
  {
    name: 'The Chewing Gum Attack',
    assigness: [team34, team59],
    start: 'Sep 4, 2019',
    deadline: 'Dec 4, 2021',
    calculation: {
      amount: '$657k',
      label: 'Estimation'
    },
    progress: {
      min: 277,
      max: 539
    },
    statusProgress: {
      ongoing: 10,
      critical: 10,
      inactive: 35,
      completed: 45
    },
    task: 72,
    status: {
      label: 'ongoing',
      type: 'primary'
    },
    bg: bg53
  },
  {
    name: 'Execution of Micky the foul mouse',
    assigness: [team1, null, team5, team11],
    start: 'Nov 1, 2019',
    deadline: 'Dec 1, 2024',
    progress: {
      min: 16,
      max: 56
    },
    statusProgress: {
      ongoing: 45,
      critical: 15,
      inactive: 20,
      completed: 20
    },
    task: 91,
    status: {
      label: 'critical',
      type: 'danger'
    },
    bg: bg54
  },

  {
    name: 'Harnessing stupidity from Jerry',
    assigness: [team21, team23, team25],
    start: 'Dec 28, 2019',
    deadline: 'Nov 28, 2021',
    progress: {
      min: 169,
      max: 394
    },
    statusProgress: {
      ongoing: 25,
      critical: 35,
      inactive: 20,
      completed: 15
    },
    task: 134,
    status: {
      label: 'ongoing',
      type: 'primary'
    },
    bg: bg55
  },
  {
    name: 'Water resistant mosquito killer gun',
    assigness: [team30, null, team59, team31],
    start: 'Feb 24, 2020',
    deadline: 'Nov 24, 2021',
    calculation: {
      amount: '$55k',
      label: 'Budget'
    },
    progress: {
      min: 600,
      max: 600
    },
    statusProgress: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35
    },
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    },
    bg: bg56
  },
  {
    name: 'Olga Dies Dreaming by Xóchitl González',
    assigness: [team11, team12, team13],
    start: 'Feb 24, 2020',
    deadline: 'Nov 24, 2021',
    calculation: {
      amount: '$55k',
      label: 'Budget'
    },
    progress: {
      min: 600,
      max: 600
    },
    statusProgress: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35
    },
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    },
    bg: bg57
  }
];
