import SettingsPanel from 'components/settings-panel/SettingsPanel';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import useToggleStyle from 'hooks/useToggleStyle';
import DeafultLayout from 'layouts/DeafultLayout';
import HomePage from 'pages/HomePage';
import Starter from 'pages/Starter';
import Leads from 'pages/apps/crm/Leads';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: <DeafultLayout />,
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
    element: <DeafultLayout />,
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
  useToggleStyle();
  return (
    <>
      <RouterProvider router={router} />
      <SettingsToggle />
      <SettingsPanel />
    </>
  );
};

export default App;
