"use client"
import React, { useState, useEffect } from "react"
import styles from "./authLinks.module.css"
import Link from "next/link"
import axios from "axios"

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState({})
  console.log("Response", userData.email_verified)

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/sucess", {
        withCredentials: true,
      })
      setUserData(response.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const status = userData.email_verified ? "authenticated" : "not authenticated"
  console.log("status", status)
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href={"/login"} className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          {status === "authenticated" ? (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
