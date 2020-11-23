import React from 'react';
import styles from './commentslist.css';

interface ICommentsListProps {
  comment: React.ReactNode;
  commentsList?: React.ReactNode;
}

export function CommentsList({ comment, commentsList }: ICommentsListProps) {
  return (
    <ul className={styles.commentslist}>
      {comment}
      {commentsList}
    </ul>
  );
}
