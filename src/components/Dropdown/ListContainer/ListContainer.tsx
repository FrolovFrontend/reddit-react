import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './listcontainer.css';

interface IListContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function ListContainer({ children, onClose }: IListContainerProps) {
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

  const node = document.getElementById('dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.listContainer} ref={ref}>
      <div className={styles.list} onClick={onClose}>
        {children}
      </div>
    </div>,
    node
  );
}
