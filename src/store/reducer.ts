import { Reducer } from 'redux';
import {
  IMeRequestAction,
  IMeRequestErrorAction,
  IMeRequestSuccessAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
} from './me/actions';
import { IMeState, meReducer } from './me/reducer';
import {
  ISetTokenAction,
  IUpdateCommentAction,
  SET_TOKEN,
  UPDATE_COMMENT,
} from './actions';
import { cardsListReducer, ICardsListState } from './cardsList/reducer';
import {
  CARDS_LIST_REQUEST,
  CARDS_LIST_REQUEST_ERROR,
  CARDS_LIST_REQUEST_SUCCESS,
  ICardsListRequestAction,
  ICardsListRequestErrorAction,
  ICardsListRequestSuccessAction,
} from './cardsList/actions';

export interface RootState {
  commentText: string;
  token: string;
  me: IMeState;
  cardsList: ICardsListState;
}

export const initialState: RootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
  cardsList: {
    loading: false,
    error: '',
    children: [],
    after: '',
  },
};

type TMyAction =
  | IUpdateCommentAction
  | ISetTokenAction
  | IMeRequestAction
  | IMeRequestSuccessAction
  | IMeRequestErrorAction
  | ICardsListRequestAction
  | ICardsListRequestSuccessAction
  | ICardsListRequestErrorAction;
export const rootReducer: Reducer<RootState, TMyAction> = (
  state = initialState,
  action,
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
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    case CARDS_LIST_REQUEST:
    case CARDS_LIST_REQUEST_SUCCESS:
    case CARDS_LIST_REQUEST_ERROR:
      return {
        ...state,
        cardsList: cardsListReducer(state.cardsList, action),
      };
    default:
      return state;
  }
};
