import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Software Enigneer / Model</h1>
        <p className={styles.desc}>Blsdahdw dshadwa sndwkandawd dsakdwa sdnwansdkwahd d ajwdosandw dasdjwa
          sndkwaidna ndnoawndwida odnasn aosndonwa da pndakwnd.
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