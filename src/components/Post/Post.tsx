import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Break } from '../Break';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentsContainer } from '../CommentsContainer';
import styles from './post.css';
import { PostContent } from './PostContent';
import { PostHead } from './PostHead';

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
  }, []);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.container} ref={postRef}>
        <PostHead />
        <PostContent />
        <CommentFormContainer />
        <Break size={32} top />
        <CommentsContainer />
      </div>
    </div>,
    node
  );
}
