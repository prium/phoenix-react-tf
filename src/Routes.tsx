import MainLayout from 'layouts/MainLayout';
import Starter from 'pages/pages/Starter';
import { createBrowserRouter } from 'react-router-dom';
import ButtonExample from 'pages/modules/components/ButtonExample';
import AccordionExample from 'pages/modules/components/AccordionExample';
import AvatarExample from 'pages/modules/components/AvatarExample';
import BadgeExample from 'pages/modules/components/BadgeExample';
import BreadcrumbExample from 'pages/modules/components/BreadcrumbExample';
import CardExample from 'pages/modules/components/CardExample';
import BootstrapCarousel from 'pages/modules/components/BootstrapCarousel';
import CollapseExample from 'pages/modules/components/CollapseExample';
import DropdownExample from 'pages/modules/components/DropdownExample';
import ListGroupExample from 'pages/modules/components/ListGroupExample';
import ModalExample from 'pages/modules/components/ModalExample';
import OffcanvasExample from 'pages/modules/components/OffcanvasExample';
import ProgressbarExample from 'pages/modules/components/ProgressbarExample';
import PlaceholderExample from 'pages/modules/components/PlaceholderExample';
import PaginationExample from 'pages/modules/components/PaginationExample';
import PopoversExample from 'pages/modules/components/PopoversExample';
import SpinnerExample from 'pages/modules/components/SpinnerExample';
import ToastsExample from 'pages/modules/components/ToastsExample';
import TooltipExample from 'pages/modules/components/TooltipExample';
import AlertsExample from 'pages/modules/components/AlertsExample';
import FormControlExample from 'pages/modules/forms/basic/FormControlExample';
import InputGroupExample from 'pages/modules/forms/basic/InputGroupExample';
import SelectExample from 'pages/modules/components/SelectExample';
import ChecksExample from 'pages/modules/components/ChecksExample';
import RangeExample from 'pages/modules/components/RangeExample';
import FloatingLabelExample from 'pages/modules/components/FloatingLabelExample';
import FormLayoutExample from 'pages/modules/components/FormLayoutExample';
import FormValidationExample from 'pages/modules/components/FormValidationExample';
import BackgroundExample from 'pages/modules/utilities/BackgroundExample';
import BorderExample from 'pages/modules/utilities/BorderExample';
import ColorsExample from 'pages/modules/utilities/ColorsExample';
import DisplayExample from 'pages/modules/utilities/DisplayExample';
import FlexExample from 'pages/modules/utilities/FlexExample';
import StackExample from 'pages/modules/utilities/StackExample';
import FloatExample from 'pages/modules/utilities/FloatExample';
import InteractionsExample from 'pages/modules/utilities/InteractionsExample';
import OpacityExample from 'pages/modules/utilities/OpacityExample';
import OverflowExample from 'pages/modules/utilities/OverflowExample';
import PositionExample from 'pages/modules/utilities/PositionExample';
import ShadowsExample from 'pages/modules/utilities/ShadowsExample';
import SizingExample from 'pages/modules/utilities/SizingExample';
import SpacingExample from 'pages/modules/utilities/SpacingExample';
import VerticalAlignExample from 'pages/modules/utilities/VerticalAlignExample';
import VisibilityExample from 'pages/modules/utilities/VisibilityExample';
import BasicTableExample from 'pages/modules/tables/BasicTableExample';
import GridExample from 'pages/modules/utilities/GridExample';
import TypographyExample from 'pages/modules/utilities/TypographyExample';
import Configuration from 'pages/documentation/customization/Configuration';
import Styling from 'pages/documentation/customization/Styling';
import DarkMode from 'pages/documentation/customization/DarkMode';
import GettingStarted from 'pages/documentation/GettingStarted';
import DesignFile from 'pages/documentation/DesignFile';
import ChangeLog from 'pages/documentation/ChangeLog';
import NavsExample from 'pages/modules/components/NavsExample';
import TabsExample from 'pages/modules/components/TabsExample';
import NavbarExample from 'pages/modules/components/NavbarExample';
import ComingSoon from 'pages/ComingSoon';
import Ecommerce from 'pages/dashboard/ecommerce';
import EcommerceLayout from 'layouts/EcommerceLayout';
import Homepage from 'pages/apps/e-commerce/customer/Homepage';
import ProductDetails from 'pages/apps/e-commerce/customer/ProductDetails';
import Cart from 'pages/apps/e-commerce/customer/Cart';
import Checkout from 'pages/apps/e-commerce/customer/checkout/Checkout';
import ProductsFilter from 'pages/apps/e-commerce/customer/ProductsFilter';
import ShippingInfo from 'pages/apps/e-commerce/customer/checkout/ShippingInfo';
import Profile from 'pages/apps/e-commerce/customer/Profile';
import Wishlist from 'pages/apps/e-commerce/customer/Wishlist';
import FavoriteStores from 'pages/apps/e-commerce/customer/FavoriteStores';
import Invoice from 'pages/apps/e-commerce/customer/Invoice';
import OrderTracking from 'pages/apps/e-commerce/customer/OrderTracking';
import AddProduct from 'pages/apps/e-commerce/admin/AddProduct';
import Products from 'pages/apps/e-commerce/admin/Products';
import Customers from 'pages/apps/e-commerce/admin/Customers';
import Orders from 'pages/apps/e-commerce/admin/Orders';
import OrderDetails from 'pages/apps/e-commerce/admin/OrderDetails';
import Refund from 'pages/apps/e-commerce/admin/Refund';
import CustomerDetails from 'pages/apps/e-commerce/admin/CustomerDetails';
import ProjectManagement from 'pages/dashboard/ProjectManagement';
import CreateNew from 'pages/apps/project-management/CreateNew';
import ProjectListView from 'pages/apps/project-management/ProjectListView';
import ProjectDetails from 'pages/apps/project-management/ProjectDetails';
import MainLayoutProvider from 'providers/MainLayoutProvider';
import ProjectTodoList from 'pages/apps/project-management/ProjectTodoList';
import ProjectBoardView from 'pages/apps/project-management/ProjectBoardView';
import ProjectCardView from 'pages/apps/project-management/ProjectCardView';
import Default from 'pages/pages/landing/Default';
import CreateAnEvent from 'pages/apps/events/CreateAnEvent';
import EventDetail from 'pages/apps/events/EventDetail';
import Chat from 'pages/apps/Chat';
import SocialProfile from 'pages/apps/social/SocialProfile';
import Settings from 'pages/apps/social/Settings';
import Feed from 'pages/apps/social/Feed';

const routes = [
  {
    path: '/',
    element: (
      <MainLayoutProvider>
        <MainLayout />
      </MainLayoutProvider>
    ),
    children: [
      {
        index: true,
        element: <Ecommerce />
      },
      {
        path: '/dashboard/project-management',
        element: <ProjectManagement />
      },
      {
        path: '/pages/starter',
        element: <Starter />
      },
      {
        path: '/apps/e-commerce/admin/',
        children: [
          {
            path: 'add-product',
            element: <AddProduct />
          },
          {
            path: 'products',
            element: <Products />
          },
          {
            path: 'customers',
            element: <Customers />
          },
          {
            path: 'orders',
            element: <Orders />
          },
          {
            path: 'order-details',
            element: <OrderDetails />
          },
          {
            path: 'refund',
            element: <Refund />
          },
          {
            path: 'customer-details',
            element: <CustomerDetails />
          }
        ]
      },
      {
        path: '/apps/project-management/',
        children: [
          {
            path: 'create-new',
            element: <CreateNew />
          },
          {
            path: 'project-list-view',
            element: <ProjectListView />
          },
          {
            path: 'project-card-view',
            element: <ProjectCardView />
          },
          {
            path: 'project-board-view',
            element: <ProjectBoardView />
          },
          {
            path: 'todo-list',
            element: <ProjectTodoList />
          },
          {
            path: 'project-details',
            element: <ProjectDetails />
          }
        ]
      },
      {
        path: '/apps/events/',
        children: [
          {
            path: 'create-an-event',
            element: <CreateAnEvent />
          },
          {
            path: 'event-detail',
            element: <EventDetail />
          }
        ]
      },
      {
        path: '/apps/social/',
        children: [
          {
            path: 'profile',
            element: <SocialProfile />
          },
          {
            path: 'settings',
            element: <Settings />
          },
          {
            path: 'feed',
            element: <Feed />
          }
        ]
      },
      {
        path: '/apps/chat',
        element: <Chat />
      },
      {
        path: '/modules',
        children: [
          {
            path: 'tables',
            children: [
              {
                path: 'basic-tables',
                element: <BasicTableExample />
              }
            ]
          },
          {
            path: 'components',
            children: [
              {
                path: 'accordion',
                element: <AccordionExample />
              },
              {
                path: 'avatar',
                element: <AvatarExample />
              },
              {
                path: 'alerts',
                element: <AlertsExample />
              },
              {
                path: 'button',
                element: <ButtonExample />
              },
              {
                path: 'badge',
                element: <BadgeExample />
              },
              {
                path: 'breadcrumb',
                element: <BreadcrumbExample />
              },
              {
                path: 'card',
                element: <CardExample />
              },
              {
                path: 'carousel/bootstrap',
                element: <BootstrapCarousel />
              },
              {
                path: 'collapse',
                element: <CollapseExample />
              },
              {
                path: 'dropdown',
                element: <DropdownExample />
              },
              {
                path: 'list-group',
                element: <ListGroupExample />
              },
              {
                path: 'modal',
                element: <ModalExample />
              },
              {
                path: 'offcanvas',
                element: <OffcanvasExample />
              },
              {
                path: 'progress-bar',
                element: <ProgressbarExample />
              },
              {
                path: 'placeholder',
                element: <PlaceholderExample />
              },
              {
                path: 'pagination',
                element: <PaginationExample />
              },
              {
                path: 'popovers',
                element: <PopoversExample />
              },
              {
                path: 'spinners',
                element: <SpinnerExample />
              },
              {
                path: 'toast',
                element: <ToastsExample />
              },
              {
                path: 'tooltips',
                element: <TooltipExample />
              },
              {
                path: 'navs-and-tabs/navs',
                element: <NavsExample />
              },
              {
                path: 'navs-and-tabs/tabs',
                element: <TabsExample />
              },
              {
                path: 'navs-and-tabs/navbar',
                element: <NavbarExample />
              }
            ]
          },
          {
            path: 'forms',
            children: [
              {
                path: 'form-control',
                element: <FormControlExample />
              },
              {
                path: 'input-group',
                element: <InputGroupExample />
              },
              {
                path: 'select',
                element: <SelectExample />
              },
              {
                path: 'checks',
                element: <ChecksExample />
              },
              {
                path: 'range',
                element: <RangeExample />
              },
              {
                path: 'floating-labels',
                element: <FloatingLabelExample />
              },
              {
                path: 'layout',
                element: <FormLayoutExample />
              },
              {
                path: 'validation',
                element: <FormValidationExample />
              }
            ]
          },
          {
            path: 'utilities',
            children: [
              {
                path: 'background',
                element: <BackgroundExample />
              },
              {
                path: 'borders',
                element: <BorderExample />
              },
              {
                path: 'colors',
                element: <ColorsExample />
              },
              {
                path: 'display',
                element: <DisplayExample />
              },
              {
                path: 'grid',
                element: <GridExample />
              },
              {
                path: 'flex',
                element: <FlexExample />
              },
              {
                path: 'stack',
                element: <StackExample />
              },
              {
                path: 'float',
                element: <FloatExample />
              },
              {
                path: 'interactions',
                element: <InteractionsExample />
              },
              {
                path: 'opacity',
                element: <OpacityExample />
              },
              {
                path: 'overflow',
                element: <OverflowExample />
              },
              {
                path: 'position',
                element: <PositionExample />
              },
              {
                path: 'shadows',
                element: <ShadowsExample />
              },
              {
                path: 'sizing',
                element: <SizingExample />
              },
              {
                path: 'spacing',
                element: <SpacingExample />
              },
              {
                path: 'typography',
                element: <TypographyExample />
              },
              {
                path: 'vertical-align',
                element: <VerticalAlignExample />
              },
              {
                path: 'visibility',
                element: <VisibilityExample />
              }
            ]
          }
        ]
      },
      {
        path: '/documentation',
        children: [
          {
            path: 'getting-started',
            element: <GettingStarted />
          },
          {
            path: 'design-file',
            element: <DesignFile />
          },
          {
            path: 'customization',
            children: [
              {
                path: 'configuration',
                element: <Configuration />
              },
              {
                path: 'styling',
                element: <Styling />
              },
              {
                path: 'dark-mode',
                element: <DarkMode />
              }
            ]
          }
        ]
      },
      {
        path: 'changelog',
        element: <ChangeLog />
      },
      {
        path: '*',
        element: <ComingSoon />
      }
    ]
  },
  {
    element: <EcommerceLayout />,
    path: '/apps/e-commerce/customer/',
    children: [
      {
        path: 'homepage',
        element: <Homepage />
      },
      {
        path: 'product-details',
        element: <ProductDetails />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'shipping-info',
        element: <ShippingInfo />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'products-filter',
        element: <ProductsFilter />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'favorite-stores',
        element: <FavoriteStores />
      },
      {
        path: 'order-tracking',
        element: <OrderTracking />
      },
      {
        path: 'invoice',
        element: <Invoice />
      }
    ]
  },
  {
    path: '/landing/default',
    element: <Default />
  }
];

export const router = createBrowserRouter(routes);

export default routes;
