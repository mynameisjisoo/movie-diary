import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './login.module.css';

const Login = ({ oauth }) => {
  const navigate = useNavigate();

  const onClick = event => {
    const method = event.target.innerText.trim();
    if (method === 'Phone') {
      authByPhone();
    } else {
      oauth.login(method);
    }
  };

  const authByPhone = () => {
    navigate('/auth-Phone');
  };

  const goToMain = userId => {
    // navigate('/main', { state: { userId: result.user.uid } });
    navigate('/main', { state: { userId } });
  };

  useEffect(() => {
    oauth.onAuthChange(user => {
      user && goToMain(user.uid);
    });
  });

  return (
    <div className={styles.login}>
      <h1 className={styles.text}>Select a login method</h1>
      <div className={styles.methods}>
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
