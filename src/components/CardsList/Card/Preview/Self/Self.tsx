import styles from './self.module.css';

import { EIcons, Icon } from 'components/Icon';

export function Self() {
  return (
    <div className={styles.self}>
      <Icon name={EIcons.redditSelf} size={40}/>
    </div>
  );
}
