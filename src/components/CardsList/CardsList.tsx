import moment, {unix} from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {Card} from "./Card";
import styles from './cardslist.css';
import {EColor, Text} from "../Text";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import axios from "axios";
import {API_BASE_URL} from "../../helpers/constants";

export interface IPostsData {
  title: string;
  id: string;
  author: string;
  thumbnail: string;
  num_comments: number;
  score: number;
  created_utc: number;
  is_video: boolean;
  is_self: boolean;
  media: {
    reddit_video: {
      fallback_url: string;
    };
  };
}

interface IPostData {
  data: IPostsData;
}

export type TPostsData = Array<IPostData>;

export function CardsList() {
  const [posts, setPosts] = useState<TPostsData>([]);
  const [nextAfter, setNextAfter] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorLoading, serErrorLoading] = useState<string>('');
  const token = useSelector<RootState, string>(state => state.token);
  const bottomOfList = useRef<HTMLDivElement>(null)

  function convertDate(epochDate: number): string {
    moment.locale('ru');
    const created = unix(epochDate);
    return created.utc().fromNow();
  }

  useEffect(() => {
    if (!token) return;

    async function load() {
      setIsLoading(true);
      serErrorLoading('');
      try {
        const {data: {data: {children, after}}} = await axios.get(`${API_BASE_URL}/best`, {
          headers: {Authorization: `bearer ${token}`},
          params: {
            limit: 10,
            after: nextAfter,
          }
        })
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        serErrorLoading(String(error));
      }
      setIsLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '50px',
    })
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }

    load();

  }, [bottomOfList.current, token, nextAfter])

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
