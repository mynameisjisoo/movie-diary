import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Diary from '../diary/diary';
import Header from '../header/header';
import Movielist from '../movie_list/movie_list';
import styles from './main.module.css';

const Main = ({ oauth, naver, repository }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const navigate = useNavigate();
  const diaryRef = useRef();
  const [loading, setLoading] = useState(false);

  const {
    state: { userId }
  } = useLocation();

  const onLogout = useCallback(() => {
    oauth.logout();
  }, [oauth]);

  useEffect(() => {
    oauth.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  }, [oauth, navigate]);

  const handleSearch = useCallback(
    query => {
      setLoading(true);
      naver
        .search(query) //
        .then(result => {
          decodeAndReplace(result);
          setLoading(false);
        });
    },
    [naver]
  );

  const decode = require('unescape');
  const decodeAndReplace = result => {
    result.map(item => {
      Object.keys(item).forEach(element => {
        return (item[element] = decode(item[element])
          .replace(/<b>/g, '')
          .replace(/<\/b>/g, ''));
      });
      return item;
    });
    setMovies(result);
  };

  const addReviewForm = useCallback(movie => {
    setSelectedMovie(movie);
    scrollUp();
  }, []);

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
          {loading && (
            <div className={styles.wrapper}>
              <div className={styles.loading}></div>
            </div>
          )}
          {!loading && (
            <Movielist movies={movies} addReviewForm={addReviewForm} />
          )}
        </div>
        <div className={styles.diary} ref={diaryRef}>
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
