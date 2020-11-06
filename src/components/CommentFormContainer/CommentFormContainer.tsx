import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm/CommentForm';
import { RootState, updateComment } from '../../store';

export function CommentFormContainer() {
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
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
