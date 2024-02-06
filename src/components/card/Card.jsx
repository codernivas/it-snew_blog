import React from "react"
import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>01.01.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>From its medieval origins to the digital era</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero&#39;s De Finibus Bonorum et Malorum for use
          in a type specimen book
        </p>
        <Link href={"/"} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
