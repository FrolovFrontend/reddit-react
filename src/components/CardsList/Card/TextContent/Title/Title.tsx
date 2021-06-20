import styles from './title.module.css';

import { Link } from 'react-router-dom';

interface ITitleProps {
  title: string;
  id: string;
}

export function Title({ title, id }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link className={styles.postLink} to={`/posts/${id}/`}>
        {title}
      </Link>
    </h2>
  );
}
