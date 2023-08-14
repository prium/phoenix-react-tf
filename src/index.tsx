import AppProvider from 'providers/AppProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'helpers/initFA';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import SettingsPanelProvider from 'providers/SettingsPanelProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <SettingsPanelProvider>
        <BreakpointsProvider>
          <App />
        </BreakpointsProvider>
      </SettingsPanelProvider>
    </AppProvider>
  </React.StrictMode>
);
