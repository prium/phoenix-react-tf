import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { members } from './users';
import {
  faCheckDouble,
  faShoppingBag,
  faSpinner,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

interface Task {
  status: {
    label: string;
    icon: IconProp;
    color: string;
  };
  details: string;
  img?: string;
  completedTasks?: number[];
  attachments?: number;
  date?: boolean;
  members?: { img: string; more?: string; contentClass?: string }[];
}

interface Column {
  title: string;
  borderColor: string;
  isCollapsed?: boolean;
  items: Task[];
}

export const kanbanBoardMembers = members.slice(0, 4);

export const kanbanItems: Column[] = [
  {
    title: 'Unassigned',
    borderColor: 'warning',
    isCollapsed: true,
    items: [
      {
        status: {
          label: 'feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Develop a new feature for the Phoenix mobile app'
      },
      {
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details:
          'Conduct user research to gather feedback on the latest product iteration'
      },
      {
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
    title: 'To do',
    borderColor: '300',
    items: [
      {
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details:
          'Test and debug code for the e-commerce website checkout process',
        img: '1.jpg',
        attachments: 15,
        members: [
          {
            img: 'team/30.webp'
          },
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/25.webp'
          }
        ]
      },
      {
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details: 'Write a blog post on industry trends and best practices',
        date: true,
        members: [
          {
            img: 'team/30.webp'
          },
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/25.webp'
          }
        ]
      }
    ]
  },
  {
    title: 'Doing',
    borderColor: 'primary',
    items: [
      {
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details: 'Create wireframes for a new Phoenix landing page design',
        date: true,
        members: [
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/57.webp',
            // more: 'R',
            contentClass: 'text-warning bg-soft-warning'
          }
        ]
      },
      {
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        details:
          'Set up and configure a new software tool for the marketing team',
        completedTasks: [34, 5],
        members: [
          {
            img: 'team/25.webp'
          }
        ]
      },
      {
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Draft and send a press release to announce a new partnership',
        date: true,
        attachments: 15
      },
      {
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details: 'Conduct a security audit of the Phoenix web applications',
        date: true,
        attachments: 15,
        img: 'glass.jpg'
      }
    ]
  },
  {
    title: 'Review',
    borderColor: 'info',
    items: [
      {
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details: 'Design and develop a new logo for the Phoenix',
        attachments: 15,
        members: [
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/25.webp'
          },
          {
            img: 'team/30.webp'
          }
        ]
      },
      {
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        details:
          'Create a fresh visual identity for Phoenix with a new logo design',
        completedTasks: [20, 18],
        members: [
          {
            img: 'team/25.webp'
          },
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/30.webp'
          }
        ]
      },
      {
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
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Write and edit copy for a new email marketing campaign',
        attachments: 15,
        img: 'wall.jpg'
      }
    ]
  },
  {
    title: 'Release',
    borderColor: 'success',
    items: [
      {
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        details: 'Improve Phoenix website usability through user testing',
        attachments: 15,
        members: [
          {
            img: 'team/57.webp'
          }
        ]
      },
      {
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        details: 'Develop and deliver a training program for new employees',
        attachments: 15,
        img: 'home.jpg',
        members: [
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/25.webp'
          },
          {
            img: 'team/30.webp'
          }
        ]
      },
      {
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        details:
          'Organize and lead a brainstorming session to generate new product ideas',
        attachments: 15,
        members: [
          {
            img: 'team/57.webp'
          },
          {
            img: 'team/25.webp'
          }
        ]
      }
    ]
  }
];
