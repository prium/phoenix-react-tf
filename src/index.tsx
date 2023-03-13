import AppProvider from 'providers/AppProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'helpers/initFA';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <AppProvider>
      <App />
    </AppProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
