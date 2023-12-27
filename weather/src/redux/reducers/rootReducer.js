import { combineReducers } from 'redux';
import {
  errorReducer,
  loadingReducer,
  sucessReducer,
  weatherReducer,
} from './weatherReducer';

const rootReducer = combineReducers({
  loader: loadingReducer,
  countryConditions: sucessReducer,
  weatherConditions: weatherReducer,
  errors: errorReducer,
});

export default rootReducer;
