import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Naver from './components/service/naver/naver';
import { firebaseApp } from './components/service/firebase/firebase';
import Oauth from './components/service/firebase/oauth';
import AuthPhone from './components/service/firebase/auth-phone';

const naver = new Naver(
  process.env.REACT_APP_NAVER_CLIENT_ID,
  process.env.REACT_APP_NAVER_CLIENT_SECRET
);
const oauth = new Oauth(firebaseApp);
const PhoneAuth = AuthPhone;

ReactDOM.render(
  <React.StrictMode>
    <App naver={naver} oauth={oauth} PhoneAuth={PhoneAuth} />
  </React.StrictMode>,
  document.getElementById('root')
);
