import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import { ActionButton } from './ActionButton';
import styles from './commentsactions.css';

interface ICommentsAction {
  onCLickReplay: () => void;
  onCLickShared: () => void;
  onCLickReport: () => void;
}

export function CommentsActions({
  onCLickReplay,
  onCLickShared,
  onCLickReport,
}: ICommentsAction) {
  return (
    <ul className={styles.actions}>
      <li className={styles.action}>
        <ActionButton
          onClick={onCLickReplay}
          text="Ответить"
          icon={<Icon size={14} name={EIcons.comments} />}
        />
      </li>
      <li className={styles.action}>
        <ActionButton
          onClick={onCLickShared}
          text="Поделиться"
          icon={<Icon size={14} name={EIcons.shared} />}
        />
      </li>
      <li className={styles.action}>
        <ActionButton
          onClick={onCLickReport}
          text="Пожаловаться"
          icon={<Icon size={14} name={EIcons.warning} />}
        />
      </li>
    </ul>
  );
}
