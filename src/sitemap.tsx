import {
  Icon,
  UilChartPie,
  UilCube,
  UilDocumentLayoutRight,
  UilFilesLandscapesAlt,
  UilPuzzlePiece
} from '@iconscout/react-unicons';

export interface Route {
  name: string;
  icon?: string | string[];
  iconSet?: 'font-awesome' | 'feather' | 'unicons';
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
}

export const routes: RouteItems[] = [
  {
    label: 'dashboard',
    horizontalNavLabel: 'home',
    active: true,
    icon: UilChartPie,
    labelDisabled: true,
    pages: [
      {
        name: 'home',
        icon: 'pie-chart',
        active: true,
        flat: true,
        pages: [
          {
            name: 'e-commerce',
            path: '/',
            pathName: 'default-dashboard',
            topNavIcon: 'shopping-cart',
            active: true
          },
          {
            name: 'project-management',
            path: 'dashboard/project-management',
            pathName: 'project-management-dashbaord',
            topNavIcon: 'clipboard'
          },
          {
            name: 'CRM',
            path: 'dashboard/crm',
            pathName: 'crm',
            topNavIcon: 'phone'
          },
          {
            name: 'social-feed',
            path: 'apps/social/feed',
            pathName: 'social-feed',
            topNavIcon: 'share-2'
          }
        ]
      }
    ]
  },
  {
    label: 'apps',
    icon: UilCube,
    pages: [
      {
        name: 'e-commerce',
        active: true,
        icon: 'shopping-cart',
        pages: [
          {
            name: 'admin',
            pages: [
              {
                name: 'add-product',
                path: 'apps/e-commerce/admin/add-product',
                pathName: 'e-commerce-add-product'
              },
              {
                name: 'products',
                path: 'apps/e-commerce/admin/products',
                pathName: 'e-commerce-products'
              },
              {
                name: 'customers',
                path: 'apps/e-commerce/admin/customers',
                pathName: 'e-commerce-customers'
              },
              {
                name: 'customer-details',
                path: 'apps/e-commerce/admin/customer-details',
                pathName: 'e-commerce-customer-details'
              },
              {
                name: 'orders',
                path: 'apps/e-commerce/admin/orders',
                pathName: 'e-commerce-orders'
              },
              {
                name: 'order-details',
                path: 'apps/e-commerce/admin/order-details',
                pathName: 'e-commerce-order-details'
              },
              {
                name: 'refund',
                path: 'apps/e-commerce/admin/refund',
                pathName: 'e-commerce-refund'
              }
            ]
          },
          {
            name: 'customer',
            active: true,
            pages: [
              {
                name: 'homepage',
                path: 'apps/e-commerce/landing/homepage',
                pathName: 'e-commerce-fe-home',
                active: true
              },
              {
                name: 'product-details',
                path: 'apps/e-commerce/landing/product-details',
                pathName: 'e-commerce-fe-product-details',
                active: true
              },
              {
                name: 'products-filter',
                path: 'apps/e-commerce/landing/products-filter',
                pathName: 'e-commerce-fe-product-filter',
                active: true
              },
              {
                name: 'cart',
                path: 'apps/e-commerce/landing/cart',
                pathName: 'e-commerce-fe-cart',
                active: true
              },
              {
                name: 'checkout',
                path: 'apps/e-commerce/landing/checkout',
                pathName: 'e-commerce-fe-checkout',
                active: true
              },
              {
                name: 'shipping-info',
                path: 'apps/e-commerce/landing/shipping-info',
                pathName: 'e-commerce-fe-shipping-info',
                active: true
              },
              {
                name: 'profile',
                path: 'apps/e-commerce/landing/profile',
                pathName: 'e-commerce-fe-profile',
                active: true
              },
              {
                name: 'favourite-stores',
                path: 'apps/e-commerce/landing/favourite-stores',
                pathName: 'e-commerce-fe-favourite-stores'
              },
              {
                name: 'wishlist',
                path: 'apps/e-commerce/landing/wishlist',
                pathName: 'e-commerce-fe-wishlist'
              },
              {
                name: 'order-tracking',
                path: 'apps/e-commerce/landing/order-tracking',
                pathName: 'e-commerce-fe-order-tracking'
              },
              {
                name: 'invoice',
                path: 'apps/e-commerce/landing/invoice',
                pathName: 'e-commerce-fe-invoice'
              }
            ]
          }
        ]
      },
      {
        name: 'CRM',
        icon: 'phone',
        pages: [
          {
            name: 'leads',
            path: '/crm/leads',
            pathName: 'crm-leads'
          },
          {
            name: 'lead details',
            path: 'apps/crm/lead-details',
            pathName: 'crm-lead-details'
          },
          {
            name: 'reports',
            path: 'apps/crm/reports',
            pathName: 'crm-reports'
          },
          {
            name: 'add-contact',
            path: 'apps/crm/add-contact',
            pathName: 'crm-add-contact'
          }
        ]
      },
      {
        name: 'project-management',
        icon: 'clipboard',
        pages: [
          {
            name: 'create new',
            path: 'apps/project-management/create-new',
            pathName: 'project-management-create-new'
          },
          {
            name: 'project-list-view',
            path: 'apps/project-management/project-list-view',
            pathName: 'project-management-project-list-view'
          },
          {
            name: 'project-card-view',
            path: 'apps/project-management/project-card-view',
            pathName: 'project-management-project-card-view'
          },
          {
            name: 'project-board-view',
            path: 'apps/project-management/project-board-view',
            pathName: 'project-management-project-board-view'
          },
          {
            name: 'todo-list',
            path: 'apps/project-management/todo-list',
            pathName: 'project-management-todo-list'
          },
          {
            name: 'project-details',
            path: 'apps/project-management/project-details',
            pathName: 'project-management-project-details'
          }
        ]
      },
      {
        name: 'chat',
        icon: 'message-square',
        path: 'apps/chat',
        pathName: 'app-chat'
      },
      {
        name: 'email',
        icon: 'mail',
        pages: [
          {
            name: 'inbox',
            path: 'apps/email/inbox',
            pathName: 'email-inbox'
          },
          {
            name: 'email-detail',
            path: 'apps/email/email-detail',
            pathName: 'email-detail'
          },
          {
            name: 'compose',
            path: 'apps/email/compose',
            pathName: 'email-compose'
          }
        ]
      },
      {
        name: 'events',
        icon: 'bookmark',
        pages: [
          {
            name: 'create an event',
            path: 'apps/events/create-an-event',
            pathName: 'create-an-event'
          },
          {
            name: 'Event detail',
            path: 'apps/events/event-detail',
            pathName: 'event-detail'
          }
        ]
      },
      {
        name: 'social',
        icon: 'share-2',
        pages: [
          {
            name: 'profile',
            path: 'apps/social/profile',
            pathName: 'social-profile'
          },
          {
            name: 'settings',
            path: 'apps/social/settings',
            pathName: 'settings'
          }
        ]
      },
      {
        name: 'calendar',
        icon: 'calendar',
        path: 'apps/calendar',
        pathName: 'app-calendar'
      }
    ]
  },
  {
    label: 'pages',
    icon: UilFilesLandscapesAlt,
    pages: [
      {
        name: 'starter',
        icon: 'compass',
        path: '/pages/starter',
        pathName: 'starter-page',
        active: true
      },
      {
        name: 'faq',
        icon: 'help-circle',
        path: 'pages/faq',
        pathName: 'faq-accordion'
      },
      {
        name: 'landing',
        icon: 'globe',
        pages: [
          {
            name: 'default',
            path: 'pages/landing/default',
            pathName: 'landing-default'
          },
          {
            name: 'alternate',
            path: 'pages/landing/alternate',
            pathName: 'landing-alternate'
          }
        ]
      },
      {
        name: 'pricing',
        icon: 'tag',
        pages: [
          {
            name: 'pricing-column',
            path: 'pages/pricing/pricing-column',
            pathName: 'pricing-column'
          },
          {
            name: 'pricing-grid',
            path: 'pages/pricing/pricing-grid',
            pathName: 'pricing-grid'
          }
        ]
      },
      {
        name: 'notifications',
        icon: 'bell',
        path: 'pages/notifications',
        pathName: 'notifications-page'
      },
      {
        name: 'members',
        icon: 'users',
        path: 'pages/members',
        pathName: 'members-page'
      },
      {
        name: 'timeline',
        icon: 'clock',
        path: 'pages/timeline',
        pathName: 'timeline-page'
      },
      {
        name: 'errors',
        icon: 'alert-triangle',
        pages: [
          {
            name: '404',
            path: 'pages/errors/404',
            pathName: 'error-404'
          },
          {
            name: '500',
            path: 'pages/errors/500',
            pathName: 'error-500'
          }
        ]
      },
      {
        name: 'authentication',
        icon: 'lock',
        pages: [
          {
            name: 'simple',
            pages: [
              {
                name: 'sign-in',
                path: 'pages/authentication/simple/sign-in',
                pathName: 'simple-signin'
              },
              {
                name: 'sign-up',
                path: 'pages/authentication/simple/sign-up',
                pathName: 'simple-signup'
              },
              {
                name: 'sign-out',
                path: 'pages/authentication/simple/sign-out',
                pathName: 'simple-signout'
              },
              {
                name: 'forgot-password',
                path: 'pages/authentication/simple/forgot-password',
                pathName: 'simple-forgot-password'
              },
              {
                name: 'reset-password',
                path: 'pages/authentication/simple/reset-password',
                pathName: 'simple-reset-password'
              },
              {
                name: 'lock-screen',
                path: 'pages/authentication/simple/lock-screen',
                pathName: 'simple-lock-screen'
              }
            ]
          },
          {
            name: 'split',
            pages: [
              {
                name: 'sign-in',
                path: 'pages/authentication/split/sign-in',
                pathName: 'split-signin'
              },
              {
                name: 'sign-up',
                path: 'pages/authentication/split/sign-up',
                pathName: 'split-signup'
              },
              {
                name: 'sign-out',
                path: 'pages/authentication/split/sign-out',
                pathName: 'split-signout'
              },
              {
                name: 'forgot-password',
                path: 'pages/authentication/split/forgot-password',
                pathName: 'split-forgot-password'
              },
              {
                name: 'reset-password',
                path: 'pages/authentication/split/reset-password',
                pathName: 'split-reset-password'
              },
              {
                name: 'lock-screen',
                path: 'pages/authentication/split/lock-screen',
                pathName: 'split-lock-screen'
              }
            ]
          },
          {
            name: 'Card',

            pages: [
              {
                name: 'sign-in',
                path: 'pages/authentication/card/sign-in',
                pathName: 'card-signin'
              },
              {
                name: 'sign-up',
                path: 'pages/authentication/card/sign-up',
                pathName: 'card-signup'
              },
              {
                name: 'sign-out',
                path: 'pages/authentication/card/sign-out',
                pathName: 'card-signout'
              },
              {
                name: 'forgot-password',
                path: 'pages/authentication/card/forgot-password',
                pathName: 'card-forgot-password'
              },
              {
                name: 'reset-password',
                path: 'pages/authentication/card/reset-password',
                pathName: 'card-reset-password'
              },
              {
                name: 'lock-screen',
                path: 'pages/authentication/card/lock-screen',
                pathName: 'card-lock-screen'
              }
            ]
          }
        ]
      },
      {
        name: 'layouts',
        icon: 'layout',
        pages: [
          {
            name: 'vertical-sidenav',
            path: 'demo/vertical-sidenav',
            pathName: 'demo-vertical-sidenav'
          },
          {
            name: 'dark-mode',
            path: 'demo/dark-mode',
            pathName: 'demo-dark-mode'
          },
          {
            name: 'sidenav-collapse',
            path: 'demo/sidenav-collapse',
            pathName: 'demo-sidenav-collapse'
          },
          {
            name: 'darknav',
            path: 'demo/darknav',
            pathName: 'demo-darknav'
          },
          {
            name: 'topnav-slim',
            path: 'demo/topnav-slim',
            pathName: 'demo-topnav-slim'
          },
          {
            name: 'navbar-top-slim',
            path: 'demo/navbar-top-slim',
            pathName: 'demo-navbar-top-slim'
          },
          {
            name: 'navbar-top',
            path: 'demo/navbar-top',
            pathName: 'demo-navbar-top'
          },
          {
            name: 'horizontal-slim',
            path: 'demo/horizontal-slim',
            pathName: 'demo-horizontal-slim'
          },
          {
            name: 'combo-nav',
            path: 'demo/combo-nav',
            pathName: 'demo-combo-nav'
          },
          {
            name: 'combo-nav-slim',
            path: 'demo/combo-nav-slim',
            pathName: 'demo-combo-nav-slim'
          }
        ]
      }
    ]
  },
  {
    label: 'modules',
    active: true,
    icon: UilPuzzlePiece,
    megaMenu: true, // works for navbar top
    pages: [
      {
        name: 'forms',
        icon: 'file-text',
        active: true,
        pages: [
          {
            name: 'basic',
            active: true,
            pages: [
              {
                name: 'form-control',
                path: '/modules/forms/form-control',
                pathName: 'form-control',
                active: true
              },
              {
                name: 'input-group',
                path: '/modules/forms/input-group',
                pathName: 'form-input-group',
                active: true
              },
              {
                name: 'select',
                path: '/modules/forms/select',
                pathName: 'form-select',
                active: true
              },
              {
                name: 'checks',
                path: '/modules/forms/checks',
                pathName: 'form-checks',
                active: true
              },
              {
                name: 'range',
                path: '/modules/forms/range',
                pathName: 'form-range',
                active: true
              },
              {
                name: 'floating-labels',
                path: '/modules/forms/floating-labels',
                pathName: 'floating-labels',
                active: true
              },
              {
                name: 'layout',
                path: '/modules/forms/layout',
                pathName: 'form-layout',
                active: true
              }
            ]
          },
          {
            name: 'validation',
            path: '/modules/forms/validation',
            pathName: 'forms-validation',
            active: true
          }
        ]
      },

      {
        name: 'icons',
        icon: 'grid',
        pages: [
          {
            name: 'feather',
            path: 'modules/icons/feather',
            pathName: 'icons-feather'
          },
          {
            name: 'font awesome',
            path: 'modules/icons/font-awesome',
            pathName: 'icons-font-awesome'
          },
          {
            name: 'unicons',
            path: 'modules/icons/unicons',
            pathName: 'icons-unicons'
          }
        ]
      },
      {
        name: 'tables',
        icon: 'columns',
        active: true,
        pages: [
          {
            name: 'Basic tables',
            path: '/modules/tables/basic-tables',
            pathName: 'basic-tables',
            active: true
          }
        ]
      },
      {
        name: 'components',
        icon: 'package',
        active: true,
        pages: [
          {
            name: 'accordion',
            pathName: 'components-accordion',
            path: '/modules/components/accordion',
            active: true
          },
          {
            name: 'avatar',
            pathName: 'components-avatar',
            path: '/modules/components/avatar',
            active: true
          },
          {
            name: 'alerts',
            pathName: 'components-alerts',
            path: '/modules/components/alerts',
            active: true
          },
          {
            name: 'badge',
            pathName: 'components-badge',
            path: '/modules/components/badge',
            active: true
          },
          {
            name: 'breadcrumb',
            pathName: 'components-breadcrumb',
            path: '/modules/components/breadcrumb',
            active: true
          },
          {
            name: 'buttons',
            pathName: 'components-buttons',
            path: '/modules/components/button',
            active: true
          },
          {
            name: 'card',
            pathName: 'components-card',
            path: '/modules/components/card',
            active: true
          },
          {
            name: 'carousel',
            active: true,
            pages: [
              {
                name: 'bootstrap',
                path: '/modules/components/carousel/bootstrap',
                pathName: 'components-bs-carousel',
                active: true
              }
            ]
          },
          {
            name: 'collapse',
            pathName: 'components-bs-collapse',
            path: '/modules/components/collapse',
            active: true
          },
          {
            name: 'dropdown',
            pathName: 'components-bs-dropdown',
            path: '/modules/components/dropdown',
            active: true
          },
          {
            name: 'list-group',
            pathName: 'components-bs-list-group',
            path: '/modules/components/list-group',
            active: true
          },
          {
            name: 'modals',
            pathName: 'components-modal',
            path: '/modules/components/modal',
            active: true
          },
          {
            name: 'navs-_and_-Tabs',
            active: true,
            pages: [
              {
                name: 'navs',
                pathName: 'components-navs',
                path: '/modules/components/navs-and-tabs/navs',
                active: true
              },
              {
                name: 'navbar',
                pathName: 'navbar',
                path: '/modules/components/navs-and-tabs/navbar',
                active: true
              },
              {
                name: 'tabs',
                pathName: 'components-tabs',
                path: '/modules/components/navs-and-tabs/tabs',
                active: true
              }
            ]
          },
          {
            name: 'offcanvas',
            pathName: 'components-offcanvas',
            path: '/modules/components/offcanvas',
            active: true
          },
          {
            name: 'progress-bar',
            pathName: 'basic-progress-bar',
            path: '/modules/components/progress-bar',
            active: true
          },
          {
            name: 'placeholder',
            pathName: 'components-placeholder',
            path: '/modules/components/placeholder',
            active: true
          },
          {
            name: 'pagination',
            path: '/modules/components/pagination',
            pathName: 'components-pagination',
            active: true
          },
          {
            name: 'popovers',
            path: '/modules/components/popovers',
            pathName: 'components-popovers',
            active: true
          },
          {
            name: 'spinners',
            path: '/modules/components/spinners',
            pathName: 'components-spinners',
            active: true
          },
          {
            name: 'toast',
            path: '/modules/components/toast',
            pathName: 'components-toast',
            active: true
          },
          {
            name: 'tooltips',
            path: '/modules/components/tooltips',
            pathName: 'components-bs-tooltips',
            active: true
          }
        ]
      },
      {
        name: 'utilities',
        icon: 'tool',
        active: true,
        pages: [
          {
            name: 'background',
            path: '/modules/utilities/background',
            pathName: 'utilities-background',
            active: true
          },
          {
            name: 'borders',
            path: '/modules/utilities/borders',
            pathName: 'utilities-borders',
            active: true
          },
          {
            name: 'colors',
            path: '/modules/utilities/colors',
            pathName: 'utilities-colors',
            active: true
          },
          {
            name: 'display',
            path: '/modules/utilities/display',
            pathName: 'utilities-display',
            active: true
          },
          {
            name: 'grid',
            path: '/modules/utilities/grid',
            pathName: 'utilities-grid',
            active: true
          },
          {
            name: 'flex',
            path: '/modules/utilities/flex',
            pathName: 'utilities-flex',
            active: true
          },
          {
            name: 'stack',
            path: '/modules/utilities/stack',
            pathName: 'utilities-stack',
            active: true
          },
          {
            name: 'float',
            path: '/modules/utilities/float',
            pathName: 'utilities-float',
            active: true
          },
          {
            name: 'interactions',
            path: '/modules/utilities/interactions',
            pathName: 'utilities-interactions',
            active: true
          },
          {
            name: 'opacity',
            path: '/modules/utilities/opacity',
            pathName: 'utilities-opacity',
            active: true
          },
          {
            name: 'overflow',
            path: '/modules/utilities/overflow',
            pathName: 'utilities-overflow',
            active: true
          },
          {
            name: 'position',
            path: '/modules/utilities/position',
            pathName: 'utilities-position',
            active: true
          },
          {
            name: 'shadows',
            path: '/modules/utilities/shadows',
            pathName: 'utilities-shadows',
            active: true
          },
          {
            name: 'sizing',
            path: '/modules/utilities/sizing',
            pathName: 'utilities-sizing',
            active: true
          },
          {
            name: 'spacing',
            path: '/modules/utilities/spacing',
            pathName: 'utilities-spacing',
            active: true
          },
          {
            name: 'Typography',
            path: '/modules/utilities/typography',
            pathName: 'utilities-typography',
            active: true
          },
          {
            name: 'vertical-align',
            path: '/modules/utilities/vertical-align',
            pathName: 'utilities-vertical-align',
            active: true
          },
          {
            name: 'visibility',
            path: '/modules/utilities/visibility',
            pathName: 'utilities-visibility',
            active: true
          }
        ]
      },
      {
        name: 'multi-level',
        icon: 'layers',
        active: true,
        pages: [
          {
            name: 'level-two',
            active: true,
            pages: [
              {
                name: 'item-1',
                path: '#!',
                active: true
              },
              {
                name: 'item-2',
                path: '#!',
                active: true
              }
            ]
          },
          {
            name: 'level-three',
            active: true,
            pages: [
              {
                name: 'item-3',
                path: '#!',
                active: true
              },
              {
                name: 'item-4',
                path: '#!',
                active: true,
                pages: [
                  {
                    name: 'item-5',
                    path: '#!',
                    active: true
                  },
                  {
                    name: 'item-6',
                    path: '#!',
                    active: true
                  }
                ]
              }
            ]
          },
          {
            name: 'level-four',
            active: true,
            pages: [
              {
                name: 'item-6',
                path: '#!',
                active: true
              },
              {
                name: 'item-7',
                active: true,
                pages: [
                  {
                    name: 'item-8',
                    path: '#!',
                    active: true
                  },
                  {
                    name: 'item-9',
                    active: true,
                    pages: [
                      {
                        name: 'item-10',
                        path: '#!',
                        active: true
                      },
                      {
                        name: 'item-11',
                        path: '#!',
                        active: true
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'documentation',
    icon: UilDocumentLayoutRight,
    active: true,
    pages: [
      {
        name: 'getting-started',
        icon: 'life-buoy',
        path: '/documentation/getting-started',
        pathName: 'getting-started',
        active: true
      },
      {
        name: 'customization',
        icon: 'settings',
        dropdownInside: true,
        active: true,
        pages: [
          {
            name: 'configuration',
            path: '/documentation/customization/configuration',
            pathName: 'doc-configuration',
            active: true
          },
          {
            name: 'styling',
            path: '/documentation/customization/styling',
            pathName: 'doc-styling',
            active: true
          },
          {
            name: 'dark-mode',
            path: '/documentation/customization/dark-mode',
            pathName: 'doc-styling',
            active: true
          }
          // {
          //   name: 'plugin',
          //   path: 'documentation/customization/plugin',
          //   pathName: 'doc-plugin'
          // }
        ]
      },
      {
        name: 'design-file',
        icon: 'figma',
        path: '/documentation/design-file',
        pathName: 'doc-design-file',
        active: true
      },
      {
        name: 'changelog',
        icon: 'git-merge',
        path: '/changelog',
        pathName: 'changelog',
        active: true
      },
      {
        name: 'showcase',
        icon: 'monitor',
        path: '/showcase',
        pathName: 'showcase'
      }
    ]
  }
];
