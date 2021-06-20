import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { saveToken } from 'store/actions';

import { Content } from 'components/Content';
import { CardsList } from 'components/CardsList';


export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, [dispatch]);

  return (
    <Content>
      <CardsList/>
    </Content>
  );
}
