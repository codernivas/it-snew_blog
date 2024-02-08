import React from "react"
import styles from "./menuPosts.module.css"
import Link from "next/link"
import Image from "next/image"
const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              className={styles.image}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            The purpose of lorem ipsum is to create a natural looking
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jerry Devil</span>
            <span className={styles.date}> - 10.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              className={styles.image}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            The purpose of lorem ipsum is to create a natural looking
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jerry Devil</span>
            <span className={styles.date}> - 10.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              className={styles.image}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            The purpose of lorem ipsum is to create a natural looking
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jerry Devil</span>
            <span className={styles.date}> - 10.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              className={styles.image}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            The purpose of lorem ipsum is to create a natural looking
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jerry Devil</span>
            <span className={styles.date}> - 10.05.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts
