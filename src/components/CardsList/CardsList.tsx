import styles from './cardslist.module.css';

import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useInfinityScroll } from 'hooks/useInfinityScroll';
import { RootState } from 'store/reducer';
import { TPostsData } from 'store/cardsList/actions';

import { locale, unix } from 'moment';

import { Card } from 'components/CardsList/Card';
import { EColor, Text } from 'components/Text';

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const posts = useSelector<RootState, TPostsData>(state => state.cardsList.children);
  const isLoading = useSelector<RootState, boolean>(state => state.cardsList.loading);
  const errorLoading = useSelector<RootState, string>(state => state.cardsList.error);

  const { showLoadButton, handleLoadButton } = useInfinityScroll(bottomOfList, errorLoading, isLoading);

  const convertDate = useCallback((epochDate: number): string => {
    locale('ru');
    const created = unix(epochDate);
    return created.utc().fromNow();
  }, []);

  return (
    <>
      <ul className={styles.cardsList}>
        {posts.length === 0 && !isLoading && !errorLoading && (
          <div style={{ textAlign: 'center' }}>
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

        <div ref={bottomOfList}/>

        {isLoading && (
          <div style={{ textAlign: 'center' }}>
            <Text size={16} color={EColor.gray99}>Загрузка...</Text>
          </div>
        )}

        {errorLoading && (
          <div role='alert' style={{ textAlign: 'center' }}>
            <Text size={16} color={EColor.gray99}>{errorLoading}</Text>
          </div>
        )}

      </ul>
      {showLoadButton && (
        <button className={styles.loadButton} onClick={handleLoadButton}>Загрузить еще</button>
      )}
    </>
  );
}
