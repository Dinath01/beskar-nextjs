import styles from './about.module.css';
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Me</h2>
        <h1 className={styles.title}>Software Engineer</h1>
        <ul className={styles.descList}>
          <li>Finished School years in Rahula College Matara & Vijitha Central College.</li>
          <li>Currently pursuing a Bachelor's Degree in Software Engineering at the University of Westminster.</li>
          <li>Worked as the Creative Director in Enigma & 2FRY Gaming,was an Event Manager at ONYX Gaming. </li>
          <li>Following a passionate career in Graphic Designing and Creative Direction.</li>
        </ul>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>4+</h1>
            <p>Completed Projects</p>
            <div className={styles.tooltip}>
              <p>Fludert : A Mobile Application for Flood Management</p>
              <p>FilmPope : A Website for Cinema Lovers</p>
              <p>Shopping System : A Simple Application for Shopping Management</p>
              <p>Education System : A Simple Application for Education Institute Management</p>
            </div>
          </div>
          <div className={styles.box}>
            <h1>2+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>7</h1>
            <p>Programming Languages</p>
            <div className={styles.tooltip}>
              <div className={styles.imgs}>
                <Image src="/JS.png" alt="JavaScript" width={50} height={50}/>
                <Image src="/pythong.png" alt="Python" width={50} height={50} />
                <Image src="/java.png" alt="Java" width={50} height={50} />
                <Image src="/mongo.png" alt="MongoDB" width={50} height={50} />
                <Image src="/next.png" alt="Next.js" width={50} height={50} />
                <Image src="/react.png" alt="React" width={50} height={50} />
                <Image src="/flutter.png" alt="Flutter" width={50} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/asset2.jpg" alt="Dinith Nethmina" fill className={styles.img}/>
      </div>
    </div>
  );
};

export default AboutPage;
