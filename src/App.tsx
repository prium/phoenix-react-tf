import Starter from 'pages/Starter';

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="starter">Starter</Link>
      </div>
    )
  },
  {
    path: 'starter',
    element: <Starter />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
