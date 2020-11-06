import React from 'react';
import { IPostsData } from '../../../hooks/usePostsData';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card(props: IPostsData) {
  const { title, author, url, num_comments, score, created, is_video } = props;

  return (
    <li className={styles.card}>
      <TextContent
        title={title}
        userAvatar="https://source.unsplash.com/random"
        userName={author}
        created={created}
      />
      <Preview previewImage={url} isVideo={is_video} />
      <Menu />
      <Controls numComments={num_comments} score={score} />
    </li>
  );
}
