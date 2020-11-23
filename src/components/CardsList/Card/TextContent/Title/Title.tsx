import React, { useEffect, useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitleProps {
  title: string;
}

export function Title({ title }: ITitleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isModalOpen && body) {
      body.style.overflow = 'hidden';
    } else if (!isModalOpen && body) {
      body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

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
