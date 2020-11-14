import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';
import { PostContent } from './PostContent';
import { PostHead } from './PostHead';

interface IPostProps {
  onClose?: () => void;
}

export function Post({ onClose }: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.container} ref={ref}>
        <PostHead />
        <PostContent />
        <CommentFormContainer />
      </div>
    </div>,
    node
  );
}
