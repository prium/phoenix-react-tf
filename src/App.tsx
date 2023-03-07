import SettingsPanel from 'components/settings-panel/SettingsPanel';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import useToggleStyle from 'hooks/useToggleStyle';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import Starter from 'pages/pages/Starter';
import Leads from 'pages/apps/crm/Leads';
import { AppContext } from 'providers/AppProvider';
import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ButtonExample from 'pages/modules/components/ButtonExample';
import AccordionExample from 'pages/modules/components/AccordionExample';
import AvatarExample from 'pages/modules/components/AvatarExample';
import BadgeExample from 'pages/modules/components/BadgeExample';
import BreadcrumbExample from 'pages/modules/components/BreadcrumbExample';
import CardExample from 'pages/modules/components/CardExample';
import BootstrapCarousel from 'pages/modules/components/BootstrapCarousel';
import CollapseExample from 'pages/modules/components/CollapseExample';
import DropdownExample from 'pages/modules/components/DropdownExample';

export const routes = [
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

const router = createBrowserRouter(routes);

const App = () => {
  const { isStylesheetLoaded } = useToggleStyle();

  const {
    config: { theme }
  } = useContext(AppContext);

  if (!isStylesheetLoaded) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: theme === 'dark' ? '#000' : '#fff'
        }}
      />
    );
  }

  return (
    <>
      <RouterProvider router={router} />
      <SettingsToggle />
      <SettingsPanel />
    </>
  );
};

export default App;
