import { ActionCreator, AnyAction, Reducer } from 'redux';

export type RootState = {
  commentText: string;
  replayText: string;
};
const initialState: RootState = {
  commentText: '',
  replayText: '',
};

// Генерируем action для типа UPDATE_COMMENT
const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text: string) => {
  return {
    type: UPDATE_COMMENT,
    text,
  };
};

const UPDATE_REPLAY = 'UPDATE_REPLAY';
export const updateReplay: ActionCreator<AnyAction> = (text: string) => {
  return {
    type: UPDATE_REPLAY,
    text,
  };
};

export const rootReducer: Reducer<RootState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case UPDATE_REPLAY:
      return {
        ...state,
        replayText: action.text,
      };
    default:
      return state;
  }
};
