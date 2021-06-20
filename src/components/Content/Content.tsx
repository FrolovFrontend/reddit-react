import styles from './content.module.css';
import { ReactNode } from 'react';

interface IContentProps {
  children?: ReactNode;
}

export function Content({ children }: IContentProps) {
  return <main className={styles.content}>{children}</main>;
}
