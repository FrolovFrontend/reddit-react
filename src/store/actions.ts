import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import queryString from 'query-string';

import { RootState } from 'store/reducer';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export interface IUpdateCommentAction {
  type: typeof UPDATE_COMMENT;
  text: string;
}

export const updateComment: ActionCreator<IUpdateCommentAction> = (
  text: string,
) => {
  return {
    type: UPDATE_COMMENT,
    text,
  };
};

export const SET_TOKEN = 'SET_TOKEN';

export interface ISetTokenAction {
  type: typeof SET_TOKEN;
  token: string;
}

export const setToken: ActionCreator<ISetTokenAction> = (token: string) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const token = getState().token;
  if (!token) {
    const parsedHash = queryString.parse(window.location.hash);
    const userToken = String(parsedHash.access_token);
    dispatch(setToken(userToken));
  } else if (token) {
    dispatch(setToken(token));
  }
};

