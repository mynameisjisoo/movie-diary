import React from 'react';
import { useLocation } from 'react-router';
import Header from '../header/header';

const Main = props => {
  const {
    state: { user }
  } = useLocation();
  console.log(user);
  return <Header />;
};

export default Main;
