import { locale, unix } from 'moment';
import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import { EColor, Text } from '../Text';
import { useDispatch, useSelector } from 'react-redux';
import { cardListAsync, TPostsData } from '../../store/cardsList/actions';
import { RootState } from '../../store/reducer';

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const posts = useSelector<RootState, TPostsData>(state => state.cardsList.children);
  const isLoading = useSelector<RootState, boolean>(state => state.cardsList.loading);
  const errorLoading = useSelector<RootState, string>(state => state.cardsList.error);

  function convertDate(epochDate: number): string {
    locale('ru');
    const created = unix(epochDate);
    return created.utc().fromNow();
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(cardListAsync());
      }
    }, {
      rootMargin: '50px',
    });
    if (bottomOfList.current && !isLoading && !errorLoading) {
      observer.observe(bottomOfList.current);
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  });

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

      <div ref={bottomOfList}></div>

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
