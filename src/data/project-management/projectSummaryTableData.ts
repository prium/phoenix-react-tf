import team1 from 'assets/img/team/24x24/1.webp';
import team5 from 'assets/img/team/24x24/5.webp';
import team9 from 'assets/img/team/24x24/9.webp';
import team11 from 'assets/img/team/24x24/11.webp';
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

export interface Status {
  ongoing: number;
  critical: number;
  inactive: number;
  completed: number;
}

export interface ProjectSummaryTableData {
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
  status: Status;
}

export const projectSummaryTableData: ProjectSummaryTableData[] = [
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
    status: {
      ongoing: 30,
      critical: 5,
      inactive: 45,
      completed: 15
    }
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
    status: {
      ongoing: 20,
      critical: 15,
      inactive: 45,
      completed: 30
    }
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
    status: {
      ongoing: 10,
      critical: 10,
      inactive: 35,
      completed: 45
    }
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
    status: {
      ongoing: 45,
      critical: 15,
      inactive: 20,
      completed: 20
    }
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
    status: {
      ongoing: 25,
      critical: 35,
      inactive: 20,
      completed: 15
    }
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
    status: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35
    }
  }
];
