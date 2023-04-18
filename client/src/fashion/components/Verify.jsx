import React, { useState } from 'react';
import styles from '../styles/verify.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Verify = () => {
  const [verify, setVerify] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state.username; // get username from location state object

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, verify);
      navigate('/fashion/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Verify your account</span>
      <div className={styles.wrapper}>
        <form onSubmit={handleVerify} className={styles.form}>
          <span className={styles.desc}>
            Please check your email id for the verification code. And enter the verification code below
          </span>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="verify">
              Verification Code
            </label>
            <input
              className={styles.input}
              type="text"
              name="verify"
              autoComplete="verify"
              required
              id="verify"
              value={verify}
              onChange={(e) => setVerify(e.target.value)}
            />
          </div>
          <div className={styles.form_submit}>
            <button className={styles.form_submit__button} type="submit">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
