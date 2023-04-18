import React, { useState } from 'react';
import styles from '../styles/signup.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Create a new account</span>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              autoComplete="name"
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              autoComplete="username"
              required
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              autoComplete="email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              type={visible ? 'text' : 'password'}
              name="password"
              autoComplete="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {visible ? (
              <AiOutlineEye
                className={styles.eye}
                size={25}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEye
                className={styles.eye}
                size={25}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
          <div className={styles.form_submit}>
            <button className={styles.form_submit__button} type="submit">
              Sign Up
            </button>
            <span>
              Already have an account?{' '}
              <Link to='/signin' className={styles.form_submit__new}> Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp