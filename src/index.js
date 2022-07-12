import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import CardList from './components/CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './containers/robots';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
