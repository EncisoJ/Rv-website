import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App'
import './pages/home.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App/>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

