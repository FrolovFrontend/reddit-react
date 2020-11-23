import React from 'react';
import { CreatedAt } from './CreatedAt';
import styles from './metadata.css';
import { UserLink } from './UserLink';

interface IMetaDataProps {
  imgPath: string;
  userName: string;
  created: string;
}

export function MetaData({ imgPath, userName, created }: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <UserLink imgPath={imgPath} userName={userName} />
      <CreatedAt created={created} />
    </div>
  );
}
