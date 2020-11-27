import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../helpers/constants';
import { useToken } from './useToken';

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
  const [data, setData] = useState<TPostsData>([]);
  const token = useToken();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/best`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        const postsData = response.data.data;
        setData(postsData.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return [data];
}
