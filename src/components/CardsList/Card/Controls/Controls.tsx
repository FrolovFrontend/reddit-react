import React from 'react';
import styles from './controls.module.css';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { Actions } from './Actions';

interface IControlsProps {
  numComments: number;
  score: number;
}

export function Controls({ numComments, score }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score}/>
      <CommentsButton numComments={numComments}/>
      <Actions/>
    </div>
  );
}
