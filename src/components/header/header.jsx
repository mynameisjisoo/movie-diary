import React from 'react';
import styles from './header.module.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <button className={styles.logo}>
        <img className={styles.logoImg} src='/favicon.png' alt='' />
        <div className={styles.logoText}>My movie diary</div>
      </button>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type='text'
          name=''
          placeholder='영화를 검색해 보세요'
        />
        <button className={styles.searchBtn}>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
