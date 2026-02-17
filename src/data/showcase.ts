import demo1 from 'assets/img/sections/demo-1.webp';
import demo2 from 'assets/img/sections/demo-2.webp';
import demo16 from 'assets/img/sections/demo-16.webp';
import demo4 from 'assets/img/sections/demo-4.webp';
import demo5 from 'assets/img/sections/demo-5.webp';
import demo6 from 'assets/img/sections/demo-6.webp';
import demo7 from 'assets/img/sections/demo-7.webp';
import demo8 from 'assets/img/sections/demo-8.webp';
import demo9 from 'assets/img/sections/demo-9.webp';
import demo10 from 'assets/img/sections/demo-10.webp';
import demo11 from 'assets/img/sections/demo-11.webp';
import demo12 from 'assets/img/sections/demo-12.webp';
import demo13 from 'assets/img/sections/demo-13.webp';
import demo14 from 'assets/img/sections/demo-14.webp';
import demo15 from 'assets/img/sections/demo-15.webp';
import section64 from 'assets/img/sections/64.webp';
import section65 from 'assets/img/sections/65.webp';
import section66 from 'assets/img/sections/66.webp';
import section21 from 'assets/img/sections/21.webp';
import section22 from 'assets/img/sections/22.webp';
import section23 from 'assets/img/sections/23.webp';
import section24 from 'assets/img/sections/24.webp';
import section26 from 'assets/img/sections/26.webp';
import section27 from 'assets/img/sections/27.webp';
import section28 from 'assets/img/sections/gallery.webp';
import section29 from 'assets/img/sections/file-manager.webp'
import kanban from 'assets/img/sections/kanban.webp';
import { BadgeBg } from 'components/base/Badge';

interface ImportantApplications {
  title: string;
  link: string;
  htmlLink?: string;
  thumb: string;
  details: string;
  disable?: boolean;
  badge?: {
    label: string;
    bg: BadgeBg
  }
}

export const demos = [
  {
    sideThumb: demo2,
    mainThumb: demo1,
    variantName: 'Vertical Sidenav (Default)',
    link: '/pages/demo/vertical-sidenav',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&navigation-type=vertical'
  },
  {
    sideThumb: demo16,
    mainThumb: demo16,
    variantName: 'Dark Mode',
    link: '/pages/demo/dark-mode',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&color-scheme=dark'
  },
  {
    sideThumb: demo5,
    mainThumb: demo4,
    variantName: 'Darknav',
    link: '/pages/demo/darknav',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&vertical-navbar-appearance=darker&horizontal-navbar-appearance=darker'
  },
  {
    sideThumb: demo7,
    mainThumb: demo6,
    variantName: 'Topnav Slim',
    link: '/pages/demo/topnav-slim',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&horizontal-navbar-shape=slim&horizontal-navbar-appearance=darker'
  },
  {
    sideThumb: demo9,
    mainThumb: demo8,
    variantName: 'Topnav Only',
    link: '/pages/demo/navbar-top',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&horizontal-navbar-shape=slim&horizontal-navbar-appearance=darker'
  },
  {
    sideThumb: demo11,
    mainThumb: demo10,
    variantName: 'Horizontal Slim',
    link: '/pages/demo/navbar-top-slim',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/dashboard/project-management.html?theme-control=true&navigation-type=horizontal&horizontal-navbar-shape=slim&horizontal-navbar-appearance=darker'
  },
  {
    sideThumb: demo13,
    mainThumb: demo12,
    variantName: 'Combo Nav',
    link: '/pages/demo/combo-nav',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&navigation-type=combo'
  },
  {
    sideThumb: demo15,
    mainThumb: demo14,
    variantName: 'Dual Nav',
    link: '/pages/demo/dual-nav',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/index.html?theme-control=true&navigation-type=dual-nav'
  }
];

export const importantApplications: ImportantApplications[] = [
  {
    title: 'File Manager',
    link: '/apps/file-manager/grid-view',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/file-manager/grid-view.html',
    thumb: section29,
    details: `Our File Manager application allows you to manage and organize files flawlessly with grid and list views. It ensures a smooth and effortless user experience.`,
    badge: {
      label: 'New',
      bg: 'warning'
    }
  },
  {
    title: 'Gallery',
    link: '/apps/gallery/album',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/gallery/album.html',
    thumb: section28,
    details: `Our gallery showcases content using flexible layouts like grid, column, masonry, and slider formats. It’s ideal for presenting visuals clearly and adapting to different design needs.`,
    badge: {
      label: 'New',
      bg: 'warning'
    }
  },
  {
    title: 'Email',
    link: '/apps/email/inbox',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/email/inbox.html',
    thumb: section64,
    details:
      'You’ll get a pre-built email app with this template so that your customer-client communication remains smooth and steady. Enjoy thorough communication with us!',
  },
  {
    title: 'Chat',
    link: '/apps/chat',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/chat.html',
    thumb: section66,
    details:
      'Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!',
  },
  {
    title: 'Calender',
    link: '/apps/calendar',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/calendar.html',
    thumb: section65,
    details:
      'Our calendar app will help you painlessly track all your trades. You can add, edit and revise the previous reminders and stay updated according to your schedule.',
  },
  {
    title: 'Kanban',
    link: '/apps/kanban/kanban',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/kanban/kanban.html',
    thumb: kanban,
    details:
      'Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!',
  }
];

export const necessaryPages = [
  {
    thumb: section21,
    pageName: 'Profile',
    pageLink: '/apps/social/profile',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/social/profile.html'
  },
  {
    thumb: section22,
    pageName: 'Pricing',
    pageLink: '/pages/pricing/pricing-column',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/pages/pricing/pricing-column.html'
  },
  {
    thumb: section23,
    pageName: 'FAQ',
    pageLink: '/pages/faq/faq-accordion',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/pages/faq/faq-accordion.html'
  },
  {
    thumb: section24,
    pageName: 'Notifications',
    pageLink: '/pages/notifications',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/pages/notifications.html'
  },
  {
    thumb: section27,
    pageName: 'Authentication',
    pageLink: '/pages/authentication/simple/sign-in',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/pages/authentication/simple/sign-in.html'
  },
  {
    thumb: section26,
    pageName: 'Event',
    pageLink: '/apps/events/event-detail',
    htmlLink: 'https://prium.github.io/phoenix/themeforest/v1.24.0/apps/events/event-detail.html'
  }
];

export const showcaseFaqs = [
  {
    id: 1,
    question: `Is this template built on Vite or Create React App scaffolding?`,
    answer: 'This template is built using Create React App scaffolding.'
  },
  {
    id: 2,
    question: ` Is this template built using TypeScript?`,
    answer: 'Yes, this template is built using TypeScript.'
  },
  {
    id: 3,
    question: `Is there any Trial version of ${
      import.meta.env.VITE_TITLE
    } React?`,
    answer: `We are sorry to inform you that there is no free or trial version of  ${
      import.meta.env.VITE_TITLE
    } React, but you would get a full refund within 10 days if the template does not match your requirement.`
  },
  {
    id: 4,
    question: `Which bootstrap react framework you are using?`,
    answer: `We are using React-Bootstrap for ${
      import.meta.env.VITE_TITLE
    } React`
  },
  {
    id: 5,
    question: 'Where will I get the Figma Files?',
    answer: `You will find the Figma link in the README.md file on your downloaded copy of  ${
      import.meta.env.VITE_TITLE
    } React.`
  }
];
