import {ActionCreator} from "redux";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export interface IUpdateCommentAction {
  type: typeof UPDATE_COMMENT;
  text: string;
}

export const updateComment: ActionCreator<IUpdateCommentAction> = (
  text: string
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