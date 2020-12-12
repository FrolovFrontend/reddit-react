import React, { useEffect } from 'react';
import { CardsList } from '../../components/CardsList';
import { Content } from '../../components/Content';
import { saveToken } from '../../store/actions';
import { useDispatch } from 'react-redux';

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
