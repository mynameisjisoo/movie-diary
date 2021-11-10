import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Naver from './components/service/api/naver';

const naver = new Naver(
  process.env.REACT_APP_NAVER_CLIENT_ID,
  process.env.REACT_APP_NAVER_CLIENT_SECRET
);
ReactDOM.render(
  <React.StrictMode>
    <App naver={naver} />
  </React.StrictMode>,
  document.getElementById('root')
);
