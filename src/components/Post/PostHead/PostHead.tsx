import styles from './posthead.module.css';

import { Text } from 'components/Text';
import { TextContent } from 'components/CardsList/Card/TextContent';

export function PostHead() {
  return (
    <div className={styles.postHead}>
      <Text size={20} bold As="h1">Заголовок поста</Text>
      <TextContent
        title="Следует отметить, что новая модель организационной деятельности поможет"
        userAvatar="https://source.unsplash.com/random"
        userName="Владимир Петров"
        created="5 часов назад"
      />
    </div>
  );
}
