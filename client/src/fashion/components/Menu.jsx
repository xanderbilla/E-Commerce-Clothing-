import styles from "../styles/menu.module.css";
import {Link} from 'react-router-dom'

export default function Menu({isOpen, setIsOpen}) {
  return (
      <div className={styles.container}>
          <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
      <ul className={styles.list}>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/'>Products</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/'>Account</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/'>Categories</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/'>Login</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/'>Register</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}