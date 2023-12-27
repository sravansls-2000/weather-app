import { WEATHER } from '../../constants';
import axios from 'axios';

const weatherLoad = () => ({
  type: WEATHER.LOAD,
});
const weatherSuccess = (weatherDetails) => ({
  type: WEATHER.LOAD_SUCCESS,
  weatherDetails,
});
const weatherConditions = (weatherConditions) => ({
  type: WEATHER.LOAD_WEATHERCONDITIONS,
  weatherConditions,
});
const weatherFail = (errorDetails) => ({
  type: WEATHER.LOAD_FAILURE,
  errorDetails,
});

const countryFetchData = (payload) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=M4BBAcg8sgbiEeAwjZFXOuvGXW6SpC4u&q=${payload}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return dispatch({ type: WEATHER.LOAD_SUCCESS, weatherDetails: data });
  } catch (error) {}
};

const weatherFetchData = (payload) => async (dispatch, getState) => {
  let existingData = JSON.parse(localStorage.getItem('weatherDetails')) || [];
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${payload}?apikey=M4BBAcg8sgbiEeAwjZFXOuvGXW6SpC4u`,

      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    existingData.push(data[0]);
    localStorage.setItem('weatherDetails', JSON.stringify(existingData));

    return dispatch({
      type: WEATHER.LOAD_WEATHERCONDITIONS,
      weatherConditions: data,
    });
  } catch (error) {}
};
// fXGt0VgjOj9krNimAI0NDXDQkW1jR0eg
export {
  weatherFail,
  weatherLoad,
  weatherSuccess,
  weatherConditions,
  weatherFetchData,
  countryFetchData,
};
