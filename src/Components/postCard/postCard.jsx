import styles from './postCard.module.css';
import Image from "next/image";
import Link from 'next/link';

const postCard = ({post}) => {
  return (
    <div className={styles.conatiner}>
        <div className={styles.top}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} fill className={styles.img}/>
            </div>}
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href = {`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default postCard