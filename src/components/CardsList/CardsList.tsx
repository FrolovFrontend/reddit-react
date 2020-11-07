import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [postsData] = usePostsData();

  function convertDate(epochDate: number): string {
    const myDate = new Date(epochDate * 1000);

    return myDate.toLocaleString();
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
            authorAvatar="https://source.unsplash.com/random"
            key={item.data.id}
            num_comments={item.data.num_comments}
            score={item.data.score}
            created={convertDate(item.data.created)}
            isVideo={item.data.is_video}
            isSelf={item.data.is_self}
            video=""
            //video={item.data.media.reddit_video.fallback_url}
          />
        );
      })}
    </ul>
  );
}
