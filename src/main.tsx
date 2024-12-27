import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppThemeProvider } from './app/AppThemeProvider';
import { App } from './app/App';

import './main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>
);
