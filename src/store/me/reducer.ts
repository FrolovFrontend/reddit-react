import {Reducer} from 'react';
import {
  IMeRequestAction,
  IMeRequestErrorAction,
  IMeRequestSuccessAction,
  IUserData,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
} from './actions';

export interface IMeState {
  loading: boolean;
  error: string;
  data: IUserData;
}

type TMeActions =
  | IMeRequestAction
  | IMeRequestSuccessAction
  | IMeRequestErrorAction;

export const meReducer: Reducer<IMeState, TMeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
