import styles from 'pages/HomePage/home.module.css';

import { Link } from 'react-router-dom';

import { Content } from 'components/Content';
import { Text } from 'components/Text';

export function NoMatch() {
  return (
    <Content>
      <div className={styles.root}>
        <Text size={16}>Страница не найдена. <Link className={styles.link} to="/">Вернуться на главную</Link></Text>
      </div>
    </Content>
  );
}
