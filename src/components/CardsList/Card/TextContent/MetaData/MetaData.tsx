import React from 'react';
import styles from './metadata.css';

interface IMetaDataProps {
  imgPath: string;
  userName: string;
  created: number;
}

export function MetaData({ imgPath, userName, created }: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src={imgPath} alt="avatar" />
        <a href="#user-url" className={styles.username}>
          {userName}
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {created}
        {/*часа назад*/}
      </span>
    </div>
  );
}
