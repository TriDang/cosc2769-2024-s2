import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>App 2</h2>
    <App2 />
    <h2>App 3</h2>
    <App3 />
  </React.StrictMode>,
);
