import styles from './home.module.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { saveToken } from 'store/actions';

import { AUTH_LINK } from 'helpers/constants';

import { Content } from 'components/Content';
import { Text } from 'components/Text';


export function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, [dispatch]);

  return (
    <Content>
      <div className={styles.root}>
        <Text size={16}>Для просмотра ленты необходимо <a className={styles.link} href={AUTH_LINK}>авторизоваться</a></Text>
      </div>
    </Content>
  );
}
