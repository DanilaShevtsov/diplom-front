import { combineReducers } from 'redux';
import auth from './auth/reducer';
import companies from './companies/reducer';

const rootReducer = combineReducers({
  auth,
  companies,
});

export default rootReducer;
