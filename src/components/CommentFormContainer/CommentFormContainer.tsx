import React, { ChangeEvent, FormEvent } from 'react';

import { useRecoilState } from 'recoil';
import { commentTextState } from 'recoilStore/commentState';

import { CommentForm } from 'components/CommentForm';

export function CommentFormContainer() {
  // redux store ==============================================================
  // const dispatch = useDispatch();
  // const value = useSelector<RootState, string>((state) => state.commentText);
  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   dispatch(updateComment(event.target.value));
  // }

  // recoil store ==============================================================
  const [commentText, setCommentText] = useRecoilState(commentTextState);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(commentText);
  }

  return (
    <CommentForm
      submitText="Комментировать"
      value={commentText}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
