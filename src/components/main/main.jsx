import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../header/header';
import Movielist from '../movie_list/movie_list';
import styles from './main.module.css';

const Main = ({ oauth, naver }) => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  const {
    state: { userId }
  } = useLocation();

  const onLogout = useCallback(() => {
    oauth.logout();
  });

  useEffect(() => {
    oauth.onAuthChange(user => {
      if (user) {
      } else {
        navigate('/');
      }
    });
  });

  const handleSearch = query => {
    naver
      .search(query) //
      .then(result => {
        setMovies(result);
        console.log(typeof result);
      });
  };

  return (
    <div className={styles.container}>
      <Header onLogout={onLogout} handleSearch={handleSearch} />
      <Movielist movies={movies} />
    </div>
  );
};

export default Main;
