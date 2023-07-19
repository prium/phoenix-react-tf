import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
export const notificationsBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Notifications',
    active: true
  }
];

export interface notification {
  // id: number;
  avatar?: string;
  name: string;
  text: string;
  textBold: string;
  ago: string;
  icon: string;
  time: string;
  date: string;
  read: boolean;
  avatarPlaceholder?: boolean;
}

export const todayNotifications: notification[] = [
  {
    avatar: 'team/30.webp',
    name: 'Jessie Samson',
    text: "<span class='me-1'>💬</span>Mentioned you in a comment",
    textBold: ' "Well done! Proud of you ❤️ " ',
    ago: '10m',
    icon: 'fas fa-clock',
    time: '10:41 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    name: 'Jane Foster',
    text: "<span class='me-1'>📅</span>Created an event",
    textBold: ' Rome holidays',
    ago: '20m',
    icon: 'fas fa-clock',
    time: '10:20 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    avatar: 'team/avatar.webp',
    avatarPlaceholder: true,
    name: 'Jessie Samson',
    text: "<span class='me-1'>👍</span>Liked your comment",
    textBold: ' "Amazing Works️"',
    ago: '1h',
    icon: 'fas fa-clock',
    time: '9:30 AM ',
    date: 'August 7,2021',
    read: false
  }
];
export const yesterdayNotifications = [
  {
    avatar: 'team/57.webp',
    name: 'Kiera Anderson',
    text: "<span class='me-1'>💬</span>Mentioned you in a comment",
    textBold: ' "This is too good to be true!"',
    ago: '',
    icon: 'fas fa-clock',
    time: '9:11 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    avatar: 'team/59.webp',
    name: 'Herman Carter',
    text: "<span class='me-1'>👤</span>Tagged you in a",
    textBold: ' post',
    ago: '',
    icon: 'fas fa-clock',
    time: '10:58 PM ',
    date: 'August 7,2021',
    read: false
  },
  {
    avatar: 'team/58.webp',
    name: 'Benjamin Button',
    text: "<span class='me-1'>👍</span>Liked your comment",
    textBold: ' "Welcome to the team️"',
    ago: '',
    icon: 'fas fa-clock',
    time: '10:18 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    avatar: 'team/60.webp',
    name: 'Aron Paul',
    text: "<span class='me-1'>📷</span>Tagged you in a",
    textBold: ' photo',
    ago: '',
    icon: 'fas fa-clock',
    time: '9:53 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    avatar: 'team/34.webp',
    name: 'Rick Sanchez',
    text: "<span class='me-1'>💬</span>Mentioned you in a comment",
    textBold: ' "You need to see these amazing photos️"',
    ago: '',
    icon: 'fas fa-clock',
    time: '9:45 AM ',
    date: 'August 7,2021',
    read: true
  }
];
