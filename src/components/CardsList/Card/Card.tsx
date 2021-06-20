import styles from './card.module.css';

import { Controls } from 'components/CardsList/Card/Controls';
import { Menu } from 'components/CardsList/Card/Menu';
import { Preview } from 'components/CardsList/Card/Preview';
import { TextContent } from 'components/CardsList/Card/TextContent';

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
    id,
  } = props;

  return (
    <li className={styles.card}>
      <TextContent
        title={title}
        userAvatar={authorAvatar}
        userName={author}
        created={created}
        id={id}
      />
      <Preview
        previewImage={thumbnail}
        previewVideo={video}
        isVideo={isVideo}
        isSelf={isSelf}
        thumbnail={thumbnail}
      />
      <Menu/>
      <Controls numComments={num_comments} score={score}/>
    </li>
  );
}
