import { ActionCreator, AnyAction, Reducer } from 'redux';

export interface RootState {
  commentText: string;
  replayText: string;
  token: string;
}
const initialState: RootState = {
  commentText: '',
  replayText: '',
  token: '',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text: string) => {
  return {
    type: UPDATE_COMMENT,
    text,
  };
};

const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (token: string) => {
  return {
    type: SET_TOKEN,
    token,
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
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
