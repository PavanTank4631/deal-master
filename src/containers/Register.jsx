import React from 'react';
import { Link } from 'react-router-dom';

//styles
import BG from '../assets/images/bg.jpg'
import styles from './register.module.css'

const Register = () => {

  const loginContainer = () => {
    return (
      <div className={styles.floatingContainer}>
        <div className={styles.innerContainer}>
          <p className={styles.title}>Deal Master</p>
          <p className={styles.note} style={{ marginTop: 8 }}>Register to continue to deal master</p>
          <div className={styles.inputContainer} style={{marginTop: 40}}>
            <p>Name</p>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={styles.inputContainer}>
            <p>Email</p>
            <input type="password" placeholder="Enter your email" />
          </div>
          <div className={styles.inputContainer}>
            <p>Contact Number</p>
            <input type="text" placeholder="Enter your contact number" />
          </div>
          <div className={styles.inputContainer}>
            <p>Password</p>
            <input type="text" placeholder="Enter your password" />
          </div>
          <div className={styles.btn}>
            <p className={styles.btnText}>Register</p>
          </div>
          <p className={styles.footer}>Already have an Account? <Link to="/">Login</Link></p>
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

export default Register