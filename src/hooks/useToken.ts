import { useEffect, useState } from 'react';
import queryString from 'query-string';

export function useToken() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const parsedHash = queryString.parse(location.hash);
    //console.log(parsedHash);

    setToken(parsedHash.access_token);
  }, [token]);

  return [token];
}
