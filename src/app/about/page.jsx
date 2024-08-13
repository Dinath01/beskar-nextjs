import styles from './about.module.css';
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitles}>About Me</h2>
        <h1 className={styles.title}>We casd sdaisdb sdjaosds dhsdiashd</h1>
        <p className={styles.desc}>
          sdajubwd dsnadjnwaa dsiandwnasd indasdbnsa dwiandsjabd dianwdjjbsd
          sndwaaid sikdaid sd sdiandwa s dawdn saidnwaf iknisdanwd sdinwan
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Years of Experience</p>
          </div>
        <div className={styles.box}>
          <h1>10K+</h1>
          <p>Years of Experience</p>
        </div>
        <div className={styles.box}>
          <h1>10K+</h1>
          <p>Years of Experience</p>
        </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/asset2.jpg" alt=""  fill className={styles.img}/>
      </div>
    </div>
  );
};

export default AboutPage;