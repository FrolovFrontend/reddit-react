import {useEffect, useState} from 'react';
import queryString from 'query-string';

export function useToken() {
  const [token, setToken] = useState<string>('');
  useEffect(() => {
      const parsedHash = queryString.parse(location.hash);
      const userToken = String(parsedHash.access_token);
      setToken(userToken)
  }, [token]);

  return token;
}