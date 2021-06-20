import React from 'react';
import styles from './userlink.module.css';

interface IUserLink {
  imgPath: string;
  userName: string;
}

export function UserLink({ imgPath, userName }: IUserLink) {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={imgPath} alt="avatar"/>
      <a href="#user-url" className={styles.username}>
        {userName}
      </a>
    </div>
  );
}
