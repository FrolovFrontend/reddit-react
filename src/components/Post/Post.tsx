import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

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
    <div className={styles.modal} ref={ref}>
      <h2>
        Следует отметить, что новая модель организационной, Следует отметить,
        что новая модель организационной
      </h2>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque
          ipsa, natus voluptatibus similique iusto. Mollitia soluta ut, dolorum
          molestias dolor earum veniam enim inventore provident! Earum a
          adipisci officia.
        </p>
      </div>
      <CommentFormContainer />
    </div>,
    node
  );
}
