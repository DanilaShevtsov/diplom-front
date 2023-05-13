import {
  COMPANIES_REQUESTED,
  LOAD_COMPANIES,
} from '../types';

const STATE = {
  companies: null,
};

const companies = (state = STATE, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case COMPANIES_REQUESTED: {

      localStorage.setItem('companies', JSON.stringify(payload));
      
      return {
        ...state,
        companies: payload
      };
    }

    case LOAD_COMPANIES: {
      return {
        ...state,
        companies: localStorage.getItem('companies')
      };
    }

    default:
      return state;
  }
};

export default companies;
