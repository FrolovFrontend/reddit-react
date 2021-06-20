import { Reducer } from 'redux';

import {
  CARDS_LIST_REQUEST,
  CARDS_LIST_REQUEST_ERROR,
  CARDS_LIST_REQUEST_SUCCESS,
  ICardsListRequestAction,
  ICardsListRequestErrorAction,
  ICardsListRequestSuccessAction,
  TPostsData,
} from 'store/cardsList/actions';
import { initialState } from 'store/reducer';

export interface ICardsListState {
  loading: boolean;
  error: string;
  children: TPostsData;
  after: string;
}

type TCardsListActions =
  ICardsListRequestAction
  | ICardsListRequestSuccessAction
  | ICardsListRequestErrorAction;

export const cardsListReducer: Reducer<ICardsListState, TCardsListActions> = (
  state = initialState.cardsList,
  action,
) => {
  switch (action.type) {
    case CARDS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CARDS_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        children: state.children.concat(...action.children),
        after: action.after,
      };
    case CARDS_LIST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
