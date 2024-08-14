import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Dinith Nethmina Surendra</h1>
        <p className={styles.desc}>
          Passion-driven and goal-oriented entrepreneur, I am fueled by the relentless pursuit of excellence in delivering top-tier service. Eager to learn and equipped with a thirst for knowledge, I am committed to honing a diverse array of professional and technical skills. My relentless drive to improve and innovate propels me towards contributing meaningfully to the industry, constantly seeking avenues to gain a competitive edge and make impactful strides forward.
        </p>
      
        <div className={styles.buttons}>
          <button className={styles.button}>About</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src = "/asset2.jpg" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};
export default Home;
