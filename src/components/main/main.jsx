import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Diary from '../diary/diary';
import Header from '../header/header';
import Movielist from '../movie_list/movie_list';
import styles from './main.module.css';

const Main = ({ oauth, naver, repository }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const navigate = useNavigate();

  const {
    state: { userId }
  } = useLocation();

  const onLogout = useCallback(() => {
    oauth.logout();
  }, [oauth]);

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
    scrollUp();
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header onLogout={onLogout} handleSearch={handleSearch} />
      </header>
      <div className={styles.main}>
        <div className={styles.movieList}>
          <Movielist movies={movies} addReviewForm={addReviewForm} />
        </div>
        <div className={styles.diary}>
          <Diary
            movie={selectedMovie}
            repository={repository}
            userId={userId}
          />
        </div>
        <button className={styles.arrowBtn} onClick={scrollUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default Main;
