import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
