import styles from './layout.module.css';
import { ReactNode } from 'react';

interface ILayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
