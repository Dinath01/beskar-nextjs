import styles from './navbar.module.css';
import Links from "./links/Links"
import Link from 'next/link';

const Navbar = () => {

  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
            <Links/>
        </div>
    </div>
  )
}

export default Navbar