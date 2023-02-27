import SettingsPanel from 'components/settings-panel/SettingsPanel';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import useToggleStyle from 'hooks/useToggleStyle';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import Starter from 'pages/Starter';
import Leads from 'pages/apps/crm/Leads';
import { AppContext } from 'providers/AppProvider';
import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        path: 'starter',
        element: <Starter />
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
