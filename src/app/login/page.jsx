"use client"
import React from "react"
import styles from "./loginpage.module.css"
const LoginPage = () => {
  const loginWithGoogle = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self")
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.socialButton} onClick={loginWithGoogle}>Sign in with Google </button>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
