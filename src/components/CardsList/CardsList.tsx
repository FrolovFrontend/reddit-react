import moment, { unix } from 'moment';
import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [postsData] = usePostsData();

  function convertDate(epochDate: number): string {
    moment.locale('ru');
    const created = unix(epochDate);
    return created.utc().fromNow();
  }

  return (
    <ul className={styles.cardsList}>
      {postsData.map((item) => {
        return (
          <Card
            id={item.data.id}
            thumbnail={item.data.thumbnail}
            title={item.data.title}
            author={item.data.author}
            authorAvatar="https://source.unsplash.com/random" // заглушка
            key={item.data.id}
            num_comments={item.data.num_comments}
            score={item.data.score}
            created={convertDate(item.data.created_utc)}
            isVideo={item.data.is_video}
            isSelf={item.data.is_self}
            video="https://v.redd.it/cfoxjuc1xzy51/DASH_1080.mp4?source=fallback" // заглушка
          />
        );
      })}
    </ul>
  );
}
