import React from 'react';
import { Break } from '../Break';
import styles from './commentscontainer.css';
import { CommentsList } from './CommentsList';
import { Sorting } from './Sorting';

export function CommentsContainer() {
  return (
    <div className={styles.commentscontainer}>
      <Sorting />
      <Break size={32} top />
      <CommentsList />
    </div>
  );
}
