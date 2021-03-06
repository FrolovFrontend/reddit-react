import { Reducer } from 'redux';
import {
  IMeRequestAction,
  IMeRequestErrorAction,
  IMeRequestSuccessAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
} from 'store/me/actions';
import { IMeState, meReducer } from 'store/me/reducer';
import {
  ISetTokenAction,
  IUpdateCommentAction,
  SET_TOKEN,
  UPDATE_COMMENT,
} from 'store/actions';
import { cardsListReducer, ICardsListState } from 'store/cardsList/reducer';
import {
  CARDS_LIST_REQUEST,
  CARDS_LIST_REQUEST_ERROR,
  CARDS_LIST_REQUEST_SUCCESS,
  ICardsListRequestAction,
  ICardsListRequestErrorAction,
  ICardsListRequestSuccessAction,
} from 'store/cardsList/actions';

export interface RootState {
  commentText: string;
  token: string;
  loggedIn: boolean;
  me: IMeState;
  cardsList: ICardsListState;
}

export const initialState: RootState = {
  commentText: '',
  token: '',
  loggedIn: false,
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
        loggedIn: action.token !== 'undefined',
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
