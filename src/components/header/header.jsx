import React, { memo, useRef } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout, handleSearch }) => {
  const inputRef = useRef();

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const onSearch = () => {
    const query = inputRef.current.value;
    handleSearch(query);
  };

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <img className={styles.logoImg} src='/favicon.png' alt='' />
        <div className={styles.logoText}>My movie diary</div>
      </span>

      <input
        ref={inputRef}
        className={styles.searchInput}
        type='text'
        name=''
        placeholder='영화를 검색해 보세요'
        onKeyPress={onKeyPress}
        autoFocus
      />

      <button className={styles.logout} onClick={onLogout}>
        <i className='fas fa-sign-out-alt'></i> Logout
      </button>
    </header>
  );
});

export default Header;
