import React, { useRef } from 'react';
import styles from './header.module.css';

const Header = props => {
  const inputRef = useRef();

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const keyword = inputRef.current.value;
    inputRef.current.value = '';
  };

  return (
    <header className={styles.header}>
      <button className={styles.logo}>
        <img className={styles.logoImg} src='/favicon.png' alt='' />
        <div className={styles.logoText}>My movie diary</div>
      </button>
      <span className={styles.search}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type='text'
          name=''
          placeholder='영화를 검색해 보세요'
          onKeyPress={onKeyPress}
        />
        <button className={styles.searchBtn} onClick={onClick}>
          <i className='fas fa-search'></i>
        </button>
      </span>
    </header>
  );
};

export default Header;
