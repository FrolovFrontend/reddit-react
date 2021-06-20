import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from 'store/reducer';
import { API_BASE_URL } from 'helpers/constants';

export const CARDS_LIST_REQUEST = 'CARDS_LIST_REQUEST';

export interface ICardsListRequestAction {
  type: typeof CARDS_LIST_REQUEST;
}

export const cardsListRequest: ActionCreator<ICardsListRequestAction> = () => ({
  type: CARDS_LIST_REQUEST,
});

export const CARDS_LIST_REQUEST_SUCCESS = 'CARDS_LIST_REQUEST_SUCCESS';

export interface IPostsData {
  title: string;
  id: string;
  author: string;
  thumbnail: string;
  num_comments: number;
  score: number;
  created_utc: number;
  is_video: boolean;
  is_self: boolean;
  media: {
    reddit_video: {
      fallback_url: string;
    };
  };
}

export interface IPostData {
  data: IPostsData;
}

export type TPostsData = Array<IPostData>;

export interface ICardsListRequestSuccessAction {
  type: typeof CARDS_LIST_REQUEST_SUCCESS;
  children: TPostsData;
  after: string;
}

export const cardListRequestSuccess: ActionCreator<ICardsListRequestSuccessAction> = (children: TPostsData, after: string) => ({
  type: CARDS_LIST_REQUEST_SUCCESS,
  children,
  after,
});

export const CARDS_LIST_REQUEST_ERROR = 'CARDS_LIST_REQUEST_ERROR';

export interface ICardsListRequestErrorAction {
  type: typeof CARDS_LIST_REQUEST_ERROR;
  error: string;
}

export const cardListRequestError: ActionCreator<ICardsListRequestErrorAction> = (error: string) => ({
  type: CARDS_LIST_REQUEST_ERROR,
  error,
});

export const cardListAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(cardsListRequest());
  axios.get(`${API_BASE_URL}/best`, {
    headers: { Authorization: `bearer ${getState().token}` },
    params: {
      limit: 10,
      after: getState().cardsList.after,
    },
  }).then((response) => {
    const { data: { data: { children, after } } } = response;
    dispatch(cardListRequestSuccess(children, after));
  }).catch((error) => {
    dispatch(cardListRequestError(String(error)));
  });
};
