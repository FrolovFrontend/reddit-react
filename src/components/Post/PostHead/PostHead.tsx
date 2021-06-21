import styles from './posthead.module.css';

import { Text } from 'components/Text';

interface PostHeadProps {
  id: string;
}

export function PostHead({ id }: PostHeadProps) {
  return (
    <div className={styles.postHead}>
      <Text size={20} bold As="h1">Пост: {id}</Text>
    </div>
  );
}
