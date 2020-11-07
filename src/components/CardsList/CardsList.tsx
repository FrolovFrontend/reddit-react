import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [postsData] = usePostsData();

  //function getCreatedDate(created: number) {
  //  const date = new Date(created * 1000);
  //  return date.toLocaleString();
  //}

  return (
    <ul className={styles.cardsList}>
      {postsData.map((item) => {
        return (
          <Card
            id={item.data.id}
            thumbnail={item.data.thumbnail}
            title={item.data.title}
            author={item.data.author}
            key={item.data.id}
            num_comments={item.data.num_comments}
            score={item.data.score}
            created={item.data.created}
            is_video={item.data.is_video}
            is_self={item.data.is_self}
          />
        );
      })}
    </ul>
  );
}
