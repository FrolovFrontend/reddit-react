import React from 'react';
import { UserLink } from '../../../../CardsList/Card/TextContent/MetaData/UserLink';
import styles from './commentmetadata.css';

interface ICommentMetaData {
  imgPath: string;
  userName: string;
  created: string;
  league: string;
}
export function CommentMetaData({
  imgPath,
  userName,
  created,
  league,
}: ICommentMetaData) {
  return (
    <div className={styles.metaData}>
      <UserLink imgPath={imgPath} userName={userName} />
      <span className={styles.createdAt}>{created}</span>
      <span className={styles.league}>{league}</span>
    </div>
  );
}
