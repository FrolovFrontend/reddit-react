import React from 'react';
import { Break } from '../../../../../Break';
import { EColor, Text } from '../../../../../Text';
import styles from './actionbutton.css';

interface IActionButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

export function ActionButton({ icon, text, onClick }: IActionButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon}
      <Break size={4} />
      <Text size={14} color={EColor.gray99}>
        {text}
      </Text>
    </button>
  );
}
