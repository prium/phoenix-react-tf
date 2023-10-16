import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Member, members } from './users';
import {
  faArrowsUpToLine,
  faBoxArchive,
  faCheckDouble,
  faClone,
  faDownload,
  faFileExport,
  faPaperclip,
  faPlus,
  faRandom,
  faShareNodes,
  faShoppingBag,
  faSpinner,
  faSquarePlus,
  faTrashCan,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import kanban1 from 'assets/img/kanban/1.jpg';
import glass from 'assets/img/kanban/glass.jpg';
import home from 'assets/img/kanban/home.jpg';
import wall from 'assets/img/kanban/wall.jpg';
import attachment1 from 'assets/img/kanban/a1.jpg';
import { FileAttachment } from 'components/common/AttachmentPreview';

export interface KanbanBoardTask {
  id: number;
  status: {
    label: string;
    icon: IconProp;
    color: string;
  };
  title: string;
  desctiption?: string;
  priority: 'High' | 'Low' | 'Medium';
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
        title: 'Develop a new feature for the Phoenix mobile app',
        priority: 'High'
      },
      {
        id: 2,
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        title:
          'Conduct user research to gather feedback on the latest product iteration',
        priority: 'Medium'
      },
      {
        id: 3,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        title:
          'Review and approve marketing materials for the upcoming product launch',
        priority: 'Low'
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
        title:
          'Test and debug code for the e-commerce website checkout process',
        img: kanban1,
        attachments: 15,
        members: [members[2], members[3], members[7]],
        priority: 'Medium'
      },
      {
        id: 2,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        title: 'Write a blog post on industry trends and best practices',
        date: 'Jan 25',
        members: [members[12], members[13], members[17]],
        priority: 'High'
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
        title: 'Create wireframes for a new Phoenix landing page design',
        date: 'Jan 25',
        members: [members[8], members[10]],
        priority: 'Medium'
      },
      {
        id: 2,
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        title:
          'Set up and configure a new software tool for the marketing team',
        completedTasks: [34, 5],
        members: [members[11]],
        priority: 'Low'
      },
      {
        id: 3,
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        title: 'Draft and send a press release to announce a new partnership',
        date: 'Feb 28',
        attachments: 15,
        priority: 'Medium'
      },
      {
        id: 4,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        title: 'Conduct a security audit of the Phoenix web applications',
        date: 'Mar 2',
        attachments: 15,
        img: glass,
        priority: 'High'
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
        title: 'Design and develop a new logo for the Phoenix',
        attachments: 15,
        members: [members[14], members[15], members[16]],
        priority: 'Medium'
      },
      {
        id: 2,
        status: {
          label: 'Issue',
          icon: faTriangleExclamation,
          color: 'warning'
        },
        title:
          'Create a fresh visual identity for Phoenix with a new logo design',
        completedTasks: [20, 18],
        members: [members[5], members[6], members[7]],
        priority: 'Low'
      },
      {
        id: 3,
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        title:
          'Identify the best software vendors for a company-wide system through comprehensive research and evaluation',
        attachments: 15,
        priority: 'High'
      },
      {
        id: 4,
        status: {
          label: 'Feature',
          icon: faCheckDouble,
          color: 'primary'
        },
        title: 'Write and edit copy for a new email marketing campaign',
        attachments: 15,
        img: wall,
        priority: 'Medium'
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
        title: 'Improve Phoenix website usability through user testing',
        attachments: 15,
        members: [members[11]],
        priority: 'High'
      },
      {
        id: 2,
        status: {
          label: 'Bug',
          icon: faShoppingBag,
          color: 'danger'
        },
        title: 'Develop and deliver a training program for new employees',
        attachments: 15,
        img: home,
        members: [members[4], members[7], members[9]],
        priority: 'Low'
      },
      {
        id: 3,
        status: {
          label: 'Undefined',
          icon: faSpinner,
          color: 'secondary'
        },
        title:
          'Organize and lead a brainstorming session to generate new product ideas',
        attachments: 15,
        members: [members[12], members[13]],
        priority: 'Medium'
      }
    ]
  }
];

export const kanbanAttachments: FileAttachment[] = [
  {
    name: 'Silly_sight_1.png',
    size: '123.34 KB',
    format: 'jpg',
    preview: attachment1,
    date: '21st December, 12:56 PM'
  },
  {
    name: 'All_images.zip',
    size: '123.34 KB',
    format: 'zip',
    date: '21st December, 12:56 PM'
  }
];
export const kanbanActions = [
  {
    icon: faFileExport,
    label: 'Move'
  },
  {
    icon: faClone,
    label: 'Duplicate'
  },
  {
    icon: faShareNodes,
    label: 'Share'
  },
  {
    icon: faSquarePlus,
    label: 'Create template'
  },
  {
    icon: faArrowsUpToLine,
    label: 'Jump to top'
  },
  {
    icon: faBoxArchive,
    label: 'Move to Archive'
  },
  {
    icon: faTrashCan,
    label: 'Move to Trash'
  },
  {
    icon: faDownload,
    label: 'Print/Download'
  }
];

export const kanbanActivities = [
  {
    id: 1,
    task: '<span class="fw-bold"> Alfen Loebe </span> Moved the task <a href="#!">"the standard chunk" </a>from <span class="fw-bold">Doing</span> to <span class="fw-bold">To Do</span>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faRandom,
    iconColor: 'warning'
  },
  {
    id: 2,
    task: '<span class="fw-bold"> Jessie Samson </span> Attached image3.png to the task <a href="#!">"the standard chunk" </a>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faPaperclip,
    iconColor: 'info'
  },
  {
    id: 3,
    task: '<span class="fw-bold"> Alfen Loebe </span> Moved the task <a href="#!">"the standard chunk" </a>from <span class="fw-bold">Doing</span> to <span class="fw-bold">To Do</span>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faPlus,
    iconColor: 'info'
  },
  {
    id: 4,
    task: '<span class="fw-bold"> Alfen Loebe </span> Moved the task <a href="#!">"the standard chunk" </a>from <span class="fw-bold">Doing</span> to <span class="fw-bold">To Do</span>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faRandom,
    iconColor: 'primary'
  }
];
