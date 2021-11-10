import React from 'react';
import styles from './login.module.css';

const Login = props => {
  const onClick = event => {
    const method = event.target.innerText;
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.text}>Select a login method</h1>
      <div className={styles.methods}>
        <button onClick={onClick} className={styles.method}>
          <i className='fas fa-envelope'></i> Email
        </button>
        <button onClick={onClick} className={styles.method}>
          <i className='fab fa-google'></i> Google
        </button>
        <button onClick={onClick} className={styles.method}>
          <i className='fab fa-github'></i> Github
        </button>
        <button onClick={onClick} className={styles.method}>
          <i className='fas fa-mobile-alt'></i> Phone
        </button>
      </div>
    </div>
  );
};

export default Login;
