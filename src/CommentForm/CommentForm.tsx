import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../store';
import styles from './commentform.css';

export function CommentForm() {
  // Получение свойства из стейта 1
  //const store = useStore<RootState>();
  //const value = store.getState().commentText;

  // Получение свойства из стейта 2
  const value = useSelector<RootState, string>((state) => state.commentText);

  // Получение ф-ии dispatch
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
