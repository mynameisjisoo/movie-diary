import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Diary from '../diary/diary';
import Header from '../header/header';
import Movielist from '../movie_list/movie_list';
import styles from './main.module.css';

const Main = ({ oauth, naver }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
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
      });
  };

  const addReviewForm = movie => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

  return (
    <div className={styles.container}>
      <Header onLogout={onLogout} handleSearch={handleSearch} />
      <div className={styles.main}>
        <div className={styles.movieList}>
          <Movielist movies={movies} addReviewForm={addReviewForm} />
        </div>
        <div className={styles.diary}>
          <Diary movie={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default Main;
