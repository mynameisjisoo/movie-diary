import React, { useRef } from 'react';
import styles from './header.module.css';

const Header = ({ onLogout, handleSearch }) => {
  const inputRef = useRef();

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const onSearch = () => {
    const keyword = inputRef.current.value;
    handleSearch(keyword);
    inputRef.current.value = '';
  };

  return (
    <header className={styles.header}>
      <button className={styles.logo}>
        <img className={styles.logoImg} src='/favicon.png' alt='' />
        <div className={styles.logoText}>My movie diary</div>
      </button>

      <input
        ref={inputRef}
        className={styles.searchInput}
        type='text'
        name=''
        placeholder='영화를 검색해 보세요'
        onKeyPress={onKeyPress}
      />

      {/* {
        onLogout&& ()
      } */}
      <button className={styles.logout} onClick={onLogout}>
        <i className='fas fa-sign-out-alt'></i> Logout
      </button>
    </header>
  );
};

export default Header;
