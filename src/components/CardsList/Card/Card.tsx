import React from 'react';
import { IPostsData } from '../../../hooks/usePostsData';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card(props: IPostsData) {
  const {
    title,
    author,
    thumbnail,
    num_comments,
    score,
    created,
    is_video,
    is_self,
  } = props;

  return (
    <li className={styles.card}>
      <TextContent
        title={title}
        userAvatar="https://source.unsplash.com/random"
        userName={author}
        created={created}
      />
      <Preview previewImage={thumbnail} isVideo={is_video} isSelf={is_self} />
      <Menu />
      <Controls numComments={num_comments} score={score} />
    </li>
  );
}
