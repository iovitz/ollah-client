import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style/theme.scss';
import React from 'react';

createRoot(document.getElementById('OLLAL_APP')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
