import styles from './header.module.css';

import { SearchBlock } from 'components/Header/SearchBlock';
import { SortBlock } from 'components/Header/SortBlock';
import { ThreadTitle } from 'components/Header/ThreadTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
