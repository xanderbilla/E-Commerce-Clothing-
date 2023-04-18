import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      navigate('/fashion');
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Login to your account</span>
      <div className={styles.wrapper}>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="username">
              username
            </label>
            <input className={styles.input} type="username" name="username" autoComplete='username' required id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input className={styles.input} type={visible ? "text" : "password"} name="password" autoComplete='password' required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {visible ?
              (<AiOutlineEye className={styles.eye} size={25} onClick={() => setVisible(false)} />) :
              (<AiOutlineEye className={styles.eye} size={25} onClick={() => setVisible(true)} />)}
          </div>
          <div className={styles.form_optional}>
            <div className={styles.form_optional__element}>
              <input className={styles.input} type="checkbox" name="checkbox" autoComplete='checkbox' id="checkbox" />
              <label className={styles.label} htmlFor="checkbox">
                Remember Me
              </label>
            </div>
            <div className={styles.form_optional__element}>
              <span className={styles.form_optional__link}>Forget Password?</span>
            </div>
          </div>
          <div className={styles.form_submit}>
            <button className={styles.form_submit__button} type="submit">
              Login
            </button>
            <span>Don't have account? <Link to='/signup' className={styles.form_submit__new}> Sign Up</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login