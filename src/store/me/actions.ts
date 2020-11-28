import { ActionCreator } from 'redux';

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
  data: IUserData
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
  error: string
) => ({
  type: ME_REQUEST_ERROR,
  error,
});
