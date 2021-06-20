import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/reducer';
import { updateComment } from 'store/actions';

import { CommentForm } from 'components/CommentForm';

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
      submitText="Комментировать"
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
