import styles from './dropdown.module.css';

import { NOOP } from 'utils/js/NOOP';
import { ReactNode, useEffect, useState } from 'react';

interface IDropDownProps {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown(props: IDropDownProps) {
  const {
    button,
    children,
    isOpen,
    onOpen = NOOP,
    onClose = NOOP,
  } = props;

  const [isDropDownOpen, setIsDropDownOpen] = useState(isOpen);

  useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [isDropDownOpen, onClose, onOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropDownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
