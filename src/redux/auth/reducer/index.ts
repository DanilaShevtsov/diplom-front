import {
  AUTH_SUCCESS,
  REMOVE_TOKEN,
  LOAD_AUTH,
} from '../types';

const STATE = {
  token: null,
  address: null,
  
};

const auth = (state = STATE, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      const {
        token,
        address,
      } = payload;

      localStorage.setItem('token', token);
      localStorage.setItem('address', address);

      return {
        ...state,
        token: token,
        address: address,
      };
    }

    case REMOVE_TOKEN: {
      localStorage.removeItem('token');
      localStorage.removeItem('address');

      return {
        ...STATE,
      };
    }

    case LOAD_AUTH: {
      return {
        ...state,
        token: localStorage.getItem('token'),
        address: localStorage.getItem('address'),
      }
    }

    default:
      return state;
  }
};

export default auth;
