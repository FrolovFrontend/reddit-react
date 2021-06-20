import styles from './commentsactions.module.css';

import { FormEvent } from 'react';

import { EIcons, Icon } from 'components/Icon';
import { ActionButton } from 'components/CommentsContainer/CommentsList/CommentsItem/CommentsActions/ActionButton';

interface ICommentsAction {
  onCLickReplay: (event: FormEvent<HTMLButtonElement>) => void;
  onCLickShared: () => void;
  onCLickReport: () => void;
}

export function CommentsActions({ onCLickReplay, onCLickShared, onCLickReport }: ICommentsAction) {
  return (
    <ul className={styles.actions}>
      <li className={styles.action}>
        <ActionButton
          onClick={onCLickReplay}
          text="Ответить"
          icon={<Icon size={14} name={EIcons.comments}/>}
        />
      </li>
      <li className={styles.action}>
        <ActionButton
          onClick={onCLickShared}
          text="Поделиться"
          icon={<Icon size={14} name={EIcons.shared}/>}
        />
      </li>
      <li className={styles.action}>
        <ActionButton
          onClick={onCLickReport}
          text="Пожаловаться"
          icon={<Icon size={14} name={EIcons.warning}/>}
        />
      </li>
    </ul>
  );
}
