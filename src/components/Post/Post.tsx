import styles from './post.module.css';

import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';

import { Break } from 'components/Break';
import { CommentFormContainer } from 'components/CommentFormContainer';
import { CommentsContainer } from 'components/CommentsContainer';
import { PostContent } from 'components/Post/PostContent';
import { PostHead } from 'components/Post/PostHead';

interface IPostProps {
  onClose?: () => void;
}

export function Post({ onClose }: IPostProps) {
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !postRef.current?.contains(event.target)
      ) {
        console.log(event.target);
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.container} ref={postRef}>
        <PostHead/>
        <PostContent/>
        <CommentFormContainer/>
        <Break size={32} top/>
        <CommentsContainer/>
      </div>
    </div>,
    node,
  );
}
