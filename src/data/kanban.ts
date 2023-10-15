import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Member, members } from './users';
import {
  faCheckDouble,
  faShoppingBag,
  faSpinner,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import kanban1 from 'assets/img/kanban/1.jpg';
import glass from 'assets/img/kanban/glass.jpg';
import home from 'assets/img/kanban/home.jpg';
import wall from 'assets/img/kanban/wall.jpg';

export interface KanbanBoardTask {
  id: number;
  status: {
    label: string;
    icon: IconProp;
    color: string;
  };
  details: string;
  img?: string;
  completedTasks?: number[];
  attachments?: number;
  date?: Date | string;
  members?: Member[];
}

export interface KanbanBoardItem {
  id: number;
  title: string;
  borderColor: string;
  isCollapsed?: boolean;
  tasks: KanbanBoardTask[];
}

export const kanbanBoardMembers = members.slice(0, 4);

export const kanbanItems: KanbanBoardItem[] = [
  {
    id: 1,
    title: 'Unassigned',
    borderColor: 'warning',
    isCollapsed: true,
    tasks: [
      {
        id: 1,
        status: {
          label: 'feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Develop a new feature for the Phoenix mobile app'
      },
      {
        id: 2,
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details:
          'Conduct user research to gather feedback on the latest product iteration'
      },
      {
        id: 3,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details:
          'Review and approve marketing materials for the upcoming product launch'
      }
    ]
  },
  {
    id: 2,
    title: 'To do',
    borderColor: '300',
    tasks: [
      {
        id: 1,
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details:
          'Test and debug code for the e-commerce website checkout process',
        img: kanban1,
        attachments: 15,
        members: [members[2], members[3], members[7]]
      },
      {
        id: 2,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details: 'Write a blog post on industry trends and best practices',
        date: 'Jan 25',
        members: [members[12], members[13], members[17]]
      }
    ]
  },
  {
    id: 3,
    title: 'Doing',
    borderColor: 'primary',
    tasks: [
      {
        id: 1,
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details: 'Create wireframes for a new Phoenix landing page design',
        date: 'Jan 25',
        members: [members[8], members[10]]
      },
      {
        id: 2,
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        details:
          'Set up and configure a new software tool for the marketing team',
        completedTasks: [34, 5],
        members: [members[11]]
      },
      {
        id: 3,
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Draft and send a press release to announce a new partnership',
        date: 'Feb 28',
        attachments: 15
      },
      {
        id: 4,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details: 'Conduct a security audit of the Phoenix web applications',
        date: 'Mar 2',
        attachments: 15,
        img: glass
      }
    ]
  },
  {
    id: 4,
    title: 'Review',
    borderColor: 'info',
    tasks: [
      {
        id: 1,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details: 'Design and develop a new logo for the Phoenix',
        attachments: 15,
        members: [members[14], members[15], members[16]]
      },
      {
        id: 2,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details:
          'Create a fresh visual identity for Phoenix with a new logo design',
        completedTasks: [20, 18],
        members: [members[5], members[6], members[7]]
      },
      {
        id: 3,
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        details:
          'Identify the best software vendors for a company-wide system through comprehensive research and evaluation',
        attachments: 15
      },
      {
        id: 4,
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Write and edit copy for a new email marketing campaign',
        attachments: 15,
        img: wall
      }
    ]
  },
  {
    id: 5,
    title: 'Release',
    borderColor: 'success',
    tasks: [
      {
        id: 1,
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Improve Phoenix website usability through user testing',
        attachments: 15,
        members: [members[11]]
      },
      {
        id: 2,
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details: 'Develop and deliver a training program for new employees',
        attachments: 15,
        img: home,
        members: [members[4], members[7], members[9]]
      },
      {
        id: 3,
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        details:
          'Organize and lead a brainstorming session to generate new product ideas',
        attachments: 15,
        members: [members[12], members[13]]
      }
    ]
  }
];
