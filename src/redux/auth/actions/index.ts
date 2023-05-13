import {
  AUTH_SUCCESS,
  REMOVE_TOKEN,
  LOAD_AUTH,
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

const loadAuthStorage = () => (dispatch: any) => {
  dispatch({
    type: LOAD_AUTH,
  });
};

export default {
  authSuccess,
  removeToken,
  loadAuthStorage,
};
