import React from 'react';
import { Break } from '../Break';
import styles from './commentscontainer.css';
import { CommentsList } from './CommentsList';
import { CommentsItem } from './CommentsList/CommentsItem';
import { Sorting } from './Sorting';

export function CommentsContainer() {
  return (
    <div className={styles.commentscontainer}>
      <Sorting />
      <Break size={32} top />
      <CommentsList comment={<CommentsItem userName="mvea" />} />
      <CommentsList comment={<CommentsItem userName="SaltinelCracker" />} />
      <CommentsList
        comment={<CommentsItem userName="jaymeekae" />}
        commentsList={
          <CommentsList
            comment={<CommentsItem userName="GreasyGallimimus" />}
            commentsList={
              <CommentsList
                comment={<CommentsItem userName="thewartornhippy" />}
                commentsList={
                  <CommentsList comment={<CommentsItem userName="_Xeet_" />} />
                }
              />
            }
          />
        }
      />
      <CommentsList comment={<CommentsItem userName="Chickeneater828" />} />
      <CommentsList comment={<CommentsItem userName="Elamaria" />} />
    </div>
  );
}
