import React from 'react';
import { Link } from 'react-router-dom';

//styles
import BG from '../assets/images/bg.jpg'
import styles from './login.module.css'

const Login = () => {

  const loginContainer = () => {
    return (
      <div className={styles.floatingContainer}>
        <div className={styles.innerContainer}>
          <p className={styles.title}>Deal Master</p>
          <p className={styles.subtitle} style={{ marginTop: 20 }}>Welcome Back!</p>
          <p className={styles.note} style={{ marginTop: 8 }}>Sign in to continue to deal master</p>
          <div className={styles.inputContainer} style={{marginTop: 40}}>
            <p>Email-Address</p>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.inputContainer}>
            <p>Password</p>
            <input type="password" placeholder="Enter your password" />
          </div>
          <a href="#" className={styles.fp}>
          <p >Forget password?</p>
          </a>
          <div className={styles.btn}>
            <p className={styles.btnText}>Log In</p>
          </div>
          <p className={styles.footer}>Don't have an Account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mainBody}>
      <img src={BG} className={styles.backImage} />
      {loginContainer()}
    </div>
  )
}

export default Login