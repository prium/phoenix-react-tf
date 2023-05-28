import { BadgeBg } from 'components/base/Badge';

interface Badge {
  label: string;
  bg: BadgeBg;
}

export interface ToDoItem {
  task: string;
  date: string;
  time: string;
  attachment?: number;
  badge?: Badge;
  listitems?: number;
}

export const todoList: ToDoItem[] = [
  {
    task: 'Designing the dungeon',
    badge: {
      label: 'DRAFT',
      bg: 'primary'
    },
    attachment: 2,
    date: '12 Nov, 2021',
    time: '12:00 PM'
  },
  {
    task: 'Hiring a motion graphic designer',
    badge: {
      label: 'URGENT',
      bg: 'warning'
    },
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 2,
    listitems: 3
  },
  {
    task: 'Daily Meetings Purpose, participants',
    badge: {
      label: 'ON PROCESS',
      bg: 'info'
    },
    date: '12 Dec, 2021',
    time: '05:00 AM',
    attachment: 4
  },
  {
    task: 'Finalizing the geometric shapes',
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 3
  },
  {
    task: 'Daily meeting with team members',
    date: '1 Nov, 2021',
    time: '12:00 PM'
  },
  {
    task: 'Daily Standup Meetings',
    date: '13 Nov, 2021',
    time: '10:00 PM'
  },
  {
    task: 'Procrastinate for a month',
    badge: {
      label: 'ON PROCESS',
      bg: 'info'
    },
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 3
  },
  {
    task: 'warming up',
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 3,
    badge: {
      label: 'CLOSE',
      bg: 'secondary'
    }
  },
  {
    task: 'Make ready for release',
    date: '2o Nov, 2021',
    time: '1:00 AM',
    attachment: 2
  }
];
