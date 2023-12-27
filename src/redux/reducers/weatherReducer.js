import { WEATHER } from '../../constants';

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case WEATHER.LOAD:
      return true;
    case WEATHER.LOAD_SUCCESS:
      return false;
    case WEATHER.LOAD_FAILURE:
      return false;

    default:
      return state;
  }
};
export const sucessReducer = (state = [], action) => {
  if (action.type === WEATHER.LOAD_SUCCESS) {
    return (state = action.weatherDetails);
  }
  return state;
};
export const weatherReducer = (state = [], action) => {
  if (action.type === WEATHER.LOAD_WEATHERCONDITIONS) {
    return (state = action.weatherConditions);
  }
  return state;
};
export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case WEATHER.LOAD:
    case WEATHER.LOAD_SUCCESS:
      return null;
    case WEATHER.LOAD_FAILURE:
      return null;

    default:
      return state;
  }
};
