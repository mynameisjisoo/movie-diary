import React from 'react';
import styles from './movie_list.module.css';
import Movie from '../movie/movie';

const Movielist = ({ movies }) => {
  return (
    <ul className={styles.movies}>
      {movies.map(movie => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
};

export default Movielist;
