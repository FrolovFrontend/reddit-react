import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export interface ICardProps {
  title: string;
  id: string;
  author: string;
  authorAvatar: string;
  thumbnail: string;
  num_comments: number;
  score: number;
  created: string;
  isVideo: boolean;
  isSelf: boolean;
  video: string;
}

export function Card(props: ICardProps) {
  const {
    title,
    author,
    authorAvatar,
    thumbnail,
    num_comments,
    score,
    created,
    isVideo,
    isSelf,
    video,
  } = props;

  return (
    <li className={styles.card}>
      <TextContent
        title={title}
        userAvatar={authorAvatar}
        userName={author}
        created={created}
      />
      <Preview
        previewImage={thumbnail}
        previewVideo={video}
        isVideo={isVideo}
        isSelf={isSelf}
        thumbnail={thumbnail}
      />
      <Menu />
      <Controls numComments={num_comments} score={score} />
    </li>
  );
}
