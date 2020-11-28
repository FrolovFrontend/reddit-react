import moment, {unix} from 'moment';
import React from 'react';
import {usePostsData} from '../../hooks/usePostsData';
import {Card} from "./Card";
import styles from './cardslist.css';
import {EColor, Text} from "../Text";

export function CardsList() {
  const {posts, isLoading, errorLoading} = usePostsData();

  function convertDate(epochDate: number): string {
    moment.locale('ru');
    const created = unix(epochDate);
    return created.utc().fromNow();
  }

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !isLoading && !errorLoading && (
        <div style={{textAlign: 'center'}}>
          <Text size={16} color={EColor.gray99}>Нет постов</Text>
        </div>
      )}
      {posts.map((post) => {
        return (
          <Card
            id={post.data.id}
            thumbnail={post.data.thumbnail}
            title={post.data.title}
            author={post.data.author}
            authorAvatar="https://source.unsplash.com/random" // заглушка
            key={post.data.id}
            num_comments={post.data.num_comments}
            score={post.data.score}
            created={convertDate(post.data.created_utc)}
            isVideo={post.data.is_video}
            isSelf={post.data.is_self}
            video="https://v.redd.it/cfoxjuc1xzy51/DASH_1080.mp4?source=fallback" // заглушка
          />
        );
      })}

      {isLoading && (
        <div style={{textAlign: 'center'}}>
          <Text size={16} color={EColor.gray99}>Загрузка...</Text>
        </div>
      )}

      {errorLoading && (
        <div role='alert' style={{textAlign: 'center'}}>
          <Text size={16} color={EColor.gray99}>{errorLoading}</Text>
        </div>
      )}
    </ul>
  );
}
