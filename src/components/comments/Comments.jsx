import React from "react"
import styles from "./comments.module.css"
import Link from "next/link"
import Image from "next/image"
const Comments = () => {
  const status = "authenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"/"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jerry Devil</span>
              <span className={styles.date}>10.05.2020</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jerry Devil</span>
              <span className={styles.date}>10.05.2020</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jerry Devil</span>
              <span className={styles.date}>10.05.2020</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jerry Devil</span>
              <span className={styles.date}>10.05.2020</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jerry Devil</span>
              <span className={styles.date}>10.05.2020</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
            <div className={styles.comment}>
            <div className={styles.user}>
                <Image
                src={"/p1.jpeg"}
                alt=""
                width={50}
                height={50}
                className={styles.image}
                />
                <div className={styles.userInfo}>
                <span className={styles.username}>Jerry Devil</span>
                <span className={styles.date}>10.05.2020</span>
                </div>
            </div>
            <p className={styles.desc}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
                in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Ciceros De Finibus Bonorum et
                Malorum for use in a type specimen book.
            </p>
            </div>
      </div>
    </div>
  )
}

export default Comments
