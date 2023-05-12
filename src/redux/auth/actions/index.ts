import {
  AUTH_SUCCESS,
  REMOVE_TOKEN,
} from '../types';

const authSuccess = (payload: any) => (dispatch: any) => {
  dispatch({
    type: AUTH_SUCCESS,
    payload,
  });
};

const removeToken = () => async (dispatch: any) => {
  dispatch({
    type: REMOVE_TOKEN,
  });
};

export default {
  authSuccess,
  removeToken,
};
