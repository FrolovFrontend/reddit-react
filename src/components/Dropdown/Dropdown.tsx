import React from 'react';
import { NOOP } from '../../utils/js/NOOP';
import styles from './dropdown.css';

interface IDropDownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

/**
 * Функция ничего не делает
 * (служит значением по умолчанию для не обязательных методов)
 */

/**
 * Компонент реализует логику выпадения чего угодно из чего угодно
 */
export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropDownProps) {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
  React.useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [
    isDropDownOpen,
  ]);

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
