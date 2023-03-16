import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import Starter from 'pages/pages/Starter';
import Leads from 'pages/apps/crm/Leads';
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

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/pages/starter',
        element: <Starter />
      },
      {
        path: '/modules',
        children: [
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'crm',
    element: <MainLayout />,
    children: [
      {
        path: 'leads',
        element: <Leads />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);

export default routes;
