import classNames from 'classnames';
import React from 'react';
import { EColor, Text } from '../../../Text';
import styles from './sortingbutton.css';

interface ISortingProps {
  isActive: boolean;
  currentOption: string;
}

export function SortingButton({ isActive, currentOption }: ISortingProps) {
  const buttonClass = classNames(styles.sortingbutton, {
    [styles.isActive]: isActive,
  });

  return (
    <button className={buttonClass}>
      <Text As="span" size={14} color={EColor.gray99}>
        Сортировать по:&nbsp;
        <Text As="span" size={14} color={EColor.orange}>
          {currentOption}
        </Text>
      </Text>
      <span className={styles.arrow}>
        <svg
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 7L5.57483e-07 0.623141L0.703795 -1.55181e-06L6.5 5.6864L12.2962 -5.38365e-07L13 0.623142L6.5 7Z"
            fill="#CC6633"
          />
        </svg>
      </span>
    </button>
  );
}
