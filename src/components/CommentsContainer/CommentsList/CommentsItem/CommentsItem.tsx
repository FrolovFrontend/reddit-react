import styles from './commentsitem.module.css';

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Break } from 'components/Break';
import { KarmaCounter } from 'components/CardsList/Card/Controls/KarmaCounter';
import { CommentForm } from 'components/CommentForm';
import { Text } from 'components/Text';
import { CommentMetaData } from 'components/CommentsContainer/CommentsList/CommentsItem/CommentMetaData';
import { CommentsActions } from 'components/CommentsContainer/CommentsList/CommentsItem/CommentsActions';

interface ICommentItemState {
  isReplay: boolean;
  value: string;
}

interface ICommentItemProps {
  userName: string;
}

export function CommentsItem({ userName }: ICommentItemProps) {
  const [state, setState] = useState<ICommentItemState>({
    isReplay: false,
    value: '',
  });

  useEffect(() => {
    if (state.isReplay) {
      textareaRef.current?.focus();
      setState((state) => ({ ...state, value: `${userName}, ` }));
    }
  }, [state.isReplay, userName]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleReplay = (event: FormEvent<HTMLButtonElement>) => {
    setState((state) => ({ ...state, isReplay: !state.isReplay }));
    event.stopPropagation();
  };

  const handleShared = () => {
    console.log('Поделиться');
  };

  const handleReport = () => {
    console.log('Пожаловаться');
  };

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.persist();
    setState((state) => ({ ...state, value: event.target.value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(state.value);
  }

  return (
    <li className={styles.commentItem}>
      <div className={styles.karmaCounter}>
        <KarmaCounter score={null}/>
      </div>
      <CommentMetaData
        created="2 часа назад"
        userName={userName}
        imgPath="https://source.unsplash.com/random"
        league="Лига социологов"
      />
      <Break size={8} top/>
      <Text As="p" size={14}>
        Сторонники тоталитаризма в науке будут объективно рассмотрены
        соответствующими инстанциями. Лишь реплицированные с зарубежных
        источников, современные исследования будут описаны максимально подробно.
      </Text>
      <Break size={12} top/>
      <CommentsActions
        onCLickReplay={handleReplay}
        onCLickShared={handleShared}
        onCLickReport={handleReport}
      />
      {state.isReplay && (
        <div className={styles.commentForm}>
          <Break size={20} top/>
          <CommentForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Ответить"
            value={state.value}
            hasCancel
            onCancel={handleReplay}
            ref={textareaRef}
          />
        </div>
      )}
    </li>
  );
}
