import { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setToken } from '../store';

export function useToken() {
  const token = useSelector<RootState, string | null>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      const parsedHash = queryString.parse(location.hash);
      const userToken = String(parsedHash.access_token);
      dispatch(setToken(userToken));
    }
  }, []);

  return token;
}
