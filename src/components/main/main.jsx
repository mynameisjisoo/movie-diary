import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Diary from '../diary/diary';
import Header from '../header/header';
import Movielist from '../movie_list/movie_list';
import styles from './main.module.css';

const Main = ({ oauth, naver }) => {
  const [movies, setMovies] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState({
  //   title: '일론 머스크: 리얼 <b>아이언맨</b>',
  //   link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=194790',
  //   image:
  //     'https://ssl.pstatic.net/imgmovie/mdi/mit110/1947/194790_P14_134723.jpg',
  //   subtitle: 'Elon Musk : The Real Life Iron Man',
  //   pubDate: '2018',
  //   subtitle: 'Elon Musk : The Real Life Iron Man',
  //   title: '일론 머스크: 리얼 <b>아이언맨</b>',
  //   userRating: '5.32'
  // });
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

  const handleClick = movie => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

  return (
    <div className={styles.container}>
      <Header onLogout={onLogout} handleSearch={handleSearch} />
      <div className={styles.main}>
        <div className={styles.movieList}>
          <Movielist movies={movies} handleClick={handleClick} />
        </div>
        <div className={styles.diary}>
          <Diary movie={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default Main;
