import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Break } from '../../../Break';
import { KarmaCounter } from '../../../CardsList/Card/Controls/KarmaCounter';
import { CommentForm } from '../../../CommentForm';
import { Text } from '../../../Text';
import { CommentMetaData } from './CommentMetaData';
import { CommentsActions } from './CommentsActions';
import styles from './commentsitem.css';

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
  }, [state.isReplay]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleReplay = () => {
    setState((state) => ({ ...state, isReplay: true }));
  };

  const handleCancel = () => {
    setState((state) => ({ ...state, isReplay: false }));
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
        <KarmaCounter score={null} />
      </div>
      <CommentMetaData
        created="2 часа назад"
        userName={userName}
        imgPath="https://source.unsplash.com/random"
        league="Лига социологов"
      />
      <Break size={8} top />
      <Text As="p" size={14}>
        Сторонники тоталитаризма в науке будут объективно рассмотрены
        соответствующими инстанциями. Лишь реплицированные с зарубежных
        источников, современные исследования будут описаны максимально подробно.
      </Text>
      <Break size={12} top />
      <CommentsActions
        onCLickReplay={handleReplay}
        onCLickShared={handleShared}
        onCLickReport={handleReport}
      />
      {state.isReplay && (
        <div className={styles.commentForm}>
          <Break size={20} top />
          <CommentForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Ответить"
            value={state.value}
            isReplay
            onCancel={handleCancel}
            ref={textareaRef}
          />
        </div>
      )}
    </li>
  );
}
