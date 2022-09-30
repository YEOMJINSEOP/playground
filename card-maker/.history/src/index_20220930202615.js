import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app.jsx';
import AuthService from './service/auth_service';

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);