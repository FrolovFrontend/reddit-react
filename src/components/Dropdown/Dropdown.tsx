import React, { useRef } from 'react';
import styles from './dropdown.css';
import { ListContainer } from './ListContainer';

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
const NOOP = () => {};

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
  const buttonRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
  React.useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [
    isDropDownOpen,
  ]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      console.log(buttonRef.current?.getBoundingClientRect());
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  return (
    <div className={styles.container} ref={buttonRef}>
      <div onClick={handleOpen}>{button}</div>
      {isDropDownOpen && (
        <ListContainer
          children={children}
          onClose={() => setIsDropDownOpen(false)}
        />
      )}
    </div>
  );
}
