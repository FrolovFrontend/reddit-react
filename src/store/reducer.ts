import {Reducer} from 'redux';
import {
  IMeRequestAction,
  IMeRequestErrorAction,
  IMeRequestSuccessAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
} from './me/actions';
import {IMeState, meReducer} from './me/reducer';
import {
  ISetTokenAction,
  IUpdateCommentAction,
  SET_TOKEN,
  UPDATE_COMMENT
} from "./actions";

export interface RootState {
  commentText: string;
  token: string;
  me: IMeState;
}

const initialState: RootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
};

type TMyAction =
  | IUpdateCommentAction
  | ISetTokenAction
  | IMeRequestAction
  | IMeRequestSuccessAction
  | IMeRequestErrorAction;
export const rootReducer: Reducer<RootState, TMyAction> = (
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
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    default:
      return state;
  }
};
