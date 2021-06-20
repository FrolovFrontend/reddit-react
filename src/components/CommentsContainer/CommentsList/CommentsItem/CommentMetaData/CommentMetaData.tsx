import styles from './commentmetadata.module.css';

import React from 'react';

import { UserLink } from 'components/CardsList/Card/TextContent/MetaData/UserLink';

interface ICommentMetaData {
  imgPath: string;
  userName: string;
  created: string;
  league: string;
}

export function CommentMetaData(props: ICommentMetaData) {
  const { imgPath, userName, created, league } = props;

  return (
    <div className={styles.metaData}>
      <UserLink imgPath={imgPath} userName={userName}/>
      <span className={styles.createdAt}>{created}</span>
      <span className={styles.league}>{league}</span>
    </div>
  );
}
