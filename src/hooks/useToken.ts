import { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setToken } from '../store';

export function useToken() {
  console.log('useToken');
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || token === 'undefined') {
      const parsedHash = queryString.parse(location.hash);
      const userToken = String(parsedHash.access_token);
      dispatch(setToken(userToken));
    }
  }, [token]);

  return token;
}
