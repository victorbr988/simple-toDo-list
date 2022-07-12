import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './components/styles/ContentApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
