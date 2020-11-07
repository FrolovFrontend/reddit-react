import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './self.css';

export function Self() {
  return (
    <div className={styles.self}>
      <Icon name={EIcons.redditSelf} size={40} />
    </div>
  );
}
