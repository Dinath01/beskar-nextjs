import styles from './singlePost.module.css';
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContianer}>
        <Image 
          src="/asset2.jpg" 
          alt='' 
          width={450}
          height={700}
          className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar} 
            src='/asset2.jpg' 
            alt='' 
            width={50} 
            height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Dinath Nethmin</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>

        </div>
        <div className={styles.content}>
          lsdowabdsa sdjasd sdknawd sdknad wdains dwiansd adbad
          dsdadna sdinasd asdn awd sdwdainsdd ssda diawnda s
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage