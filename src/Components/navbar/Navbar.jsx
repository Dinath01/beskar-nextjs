import styles from './navbar.module.css';
import Links from "./links/Links"
import Link from 'next/link';
import { auth } from '@/lib/auth';

const Navbar = async () => {

  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
            <Links session = {session}/>
        </div>
    </div>
  )
}

export default Navbar