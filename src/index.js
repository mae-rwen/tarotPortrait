import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/fonts/FairyStrange.ttf';
import './styles/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);


