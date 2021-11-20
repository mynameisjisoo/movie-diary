import styles from './auth-phone.module.css';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from '@firebase/auth';
import React, { useEffect, useRef } from 'react';

const AuthPhone = () => {
  const auth = getAuth();

  auth.useDeviceLanguage();
  useEffect(() => {
    //reCAPTCHA :자동등록방지 객체
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: response => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      },
      auth
    );
  });

  const refNumber = useRef();
  const refCode = useRef();

  const onSubmitPhoneNumber = event => {
    const appVerifier = window.recaptchaVerifier;
    event.preventDefault();
    const phoneNumber = refNumber.current.value.replace(/ /g, '');
    signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier) //
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        alert('인증코드 발송');
        refCode.current.focus();
      })
      .catch(error => alertErrorMessage(error));
  };

  const onSubmitCode = event => {
    event.preventDefault();
    const authCode = refCode.current.value.replace(/ /g, '');
    window.confirmationResult
      .confirm(authCode)
      .catch(error => alertErrorMessage(error));
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      if (event.target.name === 'phone number') {
        onSubmitPhoneNumber(event);
      } else if (event.target.name === 'verify number') {
        onSubmitCode(event);
      }
    }
  };
  const alertErrorMessage = error => {
    switch (error.code) {
      case 'auth/invalid-verification-code':
        alert('인증번호가 유효하지 않습니다.');
        break;
      case 'auth/invalid-phone-number':
        alert('전화번호가 유효하지 않습니다.');
        break;
      case 'auth/session-expired':
        alert('인증번호가 만료되었습니다.');
        break;
      case 'auth/too-many-requests':
        alert('잠시 후 다시 시도해 주세요.');
        break;

      default:
        console.log(error);
        break;
    }
  };
  return (
    <div className={styles.authPhone}>
      <h1 className={styles.title}>Please verify your phone number</h1>
      <div className={styles.input}>
        <input
          className={styles.phoneNumber}
          ref={refNumber}
          type='text'
          name='phone number'
          placeholder='+82 10 0000 0000'
          autoFocus
          onKeyPress={onKeyPress}
        />

        <button
          id={'sign-in-button'}
          className={styles.button}
          onClick={onSubmitPhoneNumber}
        >
          인증번호 요청
        </button>
      </div>
      <div className={styles.input}>
        <input
          className={styles.verifyNumber}
          ref={refCode}
          type='text'
          name='verify number'
          placeholder='verify number'
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} onClick={onSubmitCode}>
          인증번호 입력
        </button>
      </div>
    </div>
  );
};

export default AuthPhone;
