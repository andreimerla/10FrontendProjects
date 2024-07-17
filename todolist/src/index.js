import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardNumberProvider } from './components/CardNumberContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardNumberProvider>
      <App />
    </CardNumberProvider>
  </React.StrictMode>
);

