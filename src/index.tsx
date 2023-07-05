import AppProvider from 'providers/AppProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'helpers/initFA';
import BreakpointsProvider from 'providers/BreakpointsProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <BreakpointsProvider>
        <App />
      </BreakpointsProvider>
    </AppProvider>
  </React.StrictMode>
);
