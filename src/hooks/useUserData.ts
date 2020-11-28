import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IUserData,
  meRequest,
  meRequestError,
  meRequestSuccess,
} from '../store/me/actions';
import { RootState } from '../store/reducer';
import { useToken } from './useToken';

export function useUserData() {
  const data = useSelector<RootState, IUserData>((state) => state.me.data);
  const token = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        dispatch(
          meRequestSuccess({
            name: userData.name,
            iconImg: userData.icon_img,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      });
  }, [token, data]);

  return [data];
}
