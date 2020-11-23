import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';
import { CommentOptions } from './CommentOptions';

interface ICommentFormProps {
  isReplay?: boolean;
  submitText: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
  onCancel?: () => void;
}

export const CommentForm = React.forwardRef(
  (props: ICommentFormProps, ref: any) => {
    const {
      isReplay = false,
      submitText,
      value,
      onChange,
      onSubmit,
      onCancel,
    } = props;
    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <textarea
          ref={ref}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder="Оставьте ваш комментарий"
        />
        <div className={styles.controls}>
          <CommentOptions />
          {isReplay && (
            <button type="button" onClick={onCancel} className={styles.cancel}>
              Отменить
            </button>
          )}
          <button type="submit" className={styles.button}>
            {submitText}
          </button>
        </div>
      </form>
    );
  }
);
