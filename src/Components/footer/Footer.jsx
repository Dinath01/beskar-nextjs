import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Beskar</div>
      <div className={styles.text}>
        Dinith Nethmin Surendra c All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;