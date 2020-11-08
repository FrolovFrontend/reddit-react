import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';
import { API_BASE_URL } from '../helpers/constants';

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
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/hot`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        const postsData = response.data.data;
        setData(postsData.children);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
