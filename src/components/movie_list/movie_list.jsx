import React, { memo } from 'react';
import styles from './movie_list.module.css';
import Movie from '../movie/movie';

const Movielist = memo(({ movies, addReviewForm }) => {
  return (
    <ul className={styles.movies}>
      {movies.length === 0 && (
        <h1 className={styles.empty}>검색결과가 없어요🤷‍♀️</h1>
      )}
      {movies.length > 0 &&
        movies.map(movie => (
          <Movie movie={movie} key={movie.link} addReviewForm={addReviewForm} />
        ))}
    </ul>
  );
});

export default Movielist;
