import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitleProps {
  title: string;
}

export function Title({ title }: ITitleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} onClick={() => setIsModalOpen(true)}>
        {title}
      </a>

      {isModalOpen && (
        <Post
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </h2>
  );
}
