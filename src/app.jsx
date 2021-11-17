import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPhone from './components/service/firebase/auth-phone';
import Main from './components/main/main';

function App({ naver, oauth, PhoneAuth, repository }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div className={styles.component}>
                <Login oauth={oauth} PhoneAuth={PhoneAuth} />
              </div>
            }
          />
          <Route
            path='/auth-Phone'
            element={
              <div className={styles.component}>
                <AuthPhone />
              </div>
            }
          ></Route>
          <Route
            path='/main'
            element={
              <Main oauth={oauth} naver={naver} repository={repository} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
