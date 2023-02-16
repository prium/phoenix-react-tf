import useToggleStyle from 'hooks/useToggleStyle';
import DeafultLayout from 'layouts/DeafultLayout';
import HomePage from 'pages/HomePage';
import Starter from 'pages/Starter';

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    label: 'dashboard',
    labelDisabled: true,
    icon: 'pie-chart',
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
  }
];

const router = createBrowserRouter(routes);

const App = () => {
  useToggleStyle();
  return <RouterProvider router={router} />;
};

export default App;
