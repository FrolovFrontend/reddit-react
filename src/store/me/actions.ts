import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducer';
import axios from 'axios';
import { API_BASE_URL } from '../../helpers/constants';

export const ME_REQUEST = 'ME_REQUEST';

export interface IMeRequestAction {
  type: typeof ME_REQUEST;
}

export const meRequest: ActionCreator<IMeRequestAction> = () => ({
  type: ME_REQUEST,
});

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export interface IMeRequestSuccessAction {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
}

export const meRequestSuccess: ActionCreator<IMeRequestSuccessAction> = (
  data: IUserData,
) => ({
  type: ME_REQUEST_SUCCESS,
  data,
});

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export interface IMeRequestErrorAction {
  type: typeof ME_REQUEST_ERROR;
  error: string;
}

export const meRequestError: ActionCreator<IMeRequestErrorAction> = (
  error: string,
) => ({
  type: ME_REQUEST_ERROR,
  error,
});

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  axios.get(`${API_BASE_URL}/api/v1/me`, {
    headers: {Authorization: `bearer ${getState().token}`},
  })
    .then((resp) => {
      const userData = resp.data;
      dispatch(
        meRequestSuccess({
          name: userData.name,
          iconImg: userData.icon_img,
        }),
      );
    })
    .catch((error) => {
      console.log(error);
      dispatch(meRequestError(String(error)));
    });
};
