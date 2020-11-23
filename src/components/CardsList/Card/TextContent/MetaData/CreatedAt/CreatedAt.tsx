import React from 'react';
import styles from './createdat.css';

interface ICreatedAtProps {
  created: string;
}

export function CreatedAt({ created }: ICreatedAtProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>
      {created}
    </span>
  );
}
