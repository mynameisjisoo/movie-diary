import React from 'react';
import styles from './movie_list.module.css';
import Movie from '../movie/movie';

const Movielist = ({ movies, addReviewForm }) => {
  return (
    <ul className={styles.movies}>
      {movies.map(movie => (
        <Movie movie={movie} key={movie.link} addReviewForm={addReviewForm} />
      ))}
    </ul>
  );
};

export default Movielist;
