import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_BASE_URL} from '../helpers/constants';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

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

export function usePostsData() {
  const [posts, setPosts] = useState<TPostsData>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorLoading, serErrorLoading] = useState<string>('');
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    if (!token) return;

    async function loadPostsData() {
      setIsLoading(true);
      serErrorLoading('');
      try {
        const {data: {data: {children}}} = await axios.get(`${API_BASE_URL}/best`, {
          headers: {Authorization: `bearer ${token}`},
        })
        setPosts(children);
      } catch (error) {
        serErrorLoading(String(error))
      }
      setIsLoading(false);
    }

    loadPostsData();
  }, [token]);

  return {posts, isLoading, errorLoading};
}
