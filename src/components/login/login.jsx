import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    navigate('/main', { state: { userId } });
  };

  useEffect(() => {
    oauth.onAuthChange(user => {
      user && goToMain(user.uid);
    });
  });

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src='/favicon.png' alt='' />
        <span className={styles.logoText}>My movie diary</span>
      </div>
      <div>
        <button onClick={onClick} className={styles.method}>
          <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
          Google
        </button>
        <button onClick={onClick} className={styles.method}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          Github
        </button>
        <button onClick={onClick} className={styles.method}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          Phone
        </button>
      </div>
    </div>
  );
};

export default Login;
