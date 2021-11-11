import styles from './app.module.css';
import Header from './components/header/header';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import AuthPhone from './components/service/firebase/auth-phone';

function App({ naver, oauth, PhoneAuth }) {
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
          ></Route>
          <Route
            path='/auth-Phone'
            element={
              <div className={styles.component}>
                <AuthPhone />
              </div>
            }
          ></Route>
          <Route path='/main' element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  // return <Header />;
}

export default App;
