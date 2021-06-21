import styles from './post.module.css';

import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Break } from 'components/Break';
import { CommentFormContainer } from 'components/CommentFormContainer';
import { CommentsContainer } from 'components/CommentsContainer';
import { PostContent } from 'components/Post/PostContent';
import { PostHead } from 'components/Post/PostHead';

interface IPostProps {
  id: string;
}

export function Post({ id }: IPostProps) {
  const postRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !postRef.current?.contains(event.target)
      ) {
        history.push('/posts/');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [id, history]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.container} ref={postRef}>
        <PostHead id={id}/>
        <PostContent/>
        <CommentFormContainer/>
        <Break size={32} top/>
        <CommentsContainer/>
      </div>
    </div>,
    node,
  );
}
