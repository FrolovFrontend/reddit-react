import styles from './title.module.css';

import { useEffect, useState } from 'react';

import { Post } from 'components/Post';

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
      <a className={styles.postLink} href="post" onClick={() => setIsModalOpen(true)}>
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
