import styles from './actionbutton.module.css';

import { FormEvent, ReactNode } from 'react';

import { Break } from 'components/Break';
import { EColor, Text } from 'components/Text';

interface IActionButtonProps {
  icon: ReactNode;
  text: string;
  onClick: (event: FormEvent<HTMLButtonElement>) => void;
}

export function ActionButton({ icon, text, onClick }: IActionButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon}
      <Break size={4}/>
      <Text size={14} color={EColor.gray99}>
        {text}
      </Text>
    </button>
  );
}
