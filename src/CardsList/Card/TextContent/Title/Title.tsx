import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

export function Title() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <h2 className={styles.title}>
      <a
        href="#post-url"
        className={styles.postLink}
        onClick={() => setIsModalOpen(true)}
      >
        Следует отметить, что новая модель организационной, Следует отметить,
        что новая модель организационной
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
