import {
  COMPANIES_REQUESTED,
  LOAD_COMPANIES,
} from '../types';

const updateStateCompanies = (payload: any) => (dispatch: any) => {
  dispatch({
    type: COMPANIES_REQUESTED,
    payload,
  });
};

const getCompaniesFromLocalStorage = () => (dispatch: any) => {
  dispatch({
    type: LOAD_COMPANIES,
  });
};

export default {
  updateStateCompanies,
  getCompaniesFromLocalStorage
};
