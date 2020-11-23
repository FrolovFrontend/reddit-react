import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm/CommentForm';
import { RootState, updateReplay } from '../../store';

interface ICommentReplayContainerProps {
  onCancel: () => void;
}

export function CommentReplayContainer({
  onCancel,
}: ICommentReplayContainerProps) {
  const value = useSelector<RootState, string>((state) => state.replayText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateReplay(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <CommentForm
      submitText="Ответить"
      isReplay
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
}
