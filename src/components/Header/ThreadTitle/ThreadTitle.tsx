import styles from './threadtitle.module.css';

import { Link } from 'react-router-dom';

export function ThreadTitle() {
  return (
    <h1 className={styles.threadTitle}><Link to='/'>Header</Link></h1>
  );
}
