import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudRain,
  faCloudShowersHeavy,
  faCloudMoon,
  faCloudMoonRain,
  faSun,
  faTint,
  faCloud,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import {
  weatherFetchData,
  countryFetchData,
} from '../redux/actions/weatherActions';
import ShowingHystory from './ShowingHystory';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState();
  const countryConditions = useSelector((state) => state.countryConditions);
  const weatherConditions = useSelector((state) => state.weatherConditions);

  const PreviousData = JSON.parse(
    localStorage.getItem('weatherDetails') || '[]'
  );
  let countryNames = [];

  useEffect(() => {
    if (countryConditions.length === 1)
      dispatch(
        weatherFetchData(
          countryConditions.length === 1 ? countryConditions[0].Key : null
        )
      );
  }, [dispatch, countryConditions]);
  let some1 = [];
  let some2 = [0];
  const addTwoNumbers = (n1, n2) => {
    let result;
    if (!n1 && !n2) return [];
    for (let i = 0; i <= n1.length; i++) {}
  };
  console.log(addTwoNumbers(some1, some2));

  return (
    <div className="Home clouds">
      <div className="countryName">
        <h1>
          {countryConditions.length === 1
            ? countryConditions[0].LocalizedName
            : countryConditions.length > 2
            ? selectedCountry
            : 'Enter City Name'}
        </h1>
        {countryConditions.length >= 1 ? (
          <select
            className="effect"
            placeholder="select location"
            onChange={(e) => {
              setSelectedCountry(e.target.selectedOptions[0].text);
              countryNames.push(e.target.selectedOptions[0].text);
              dispatch(weatherFetchData(e.target.value));
            }}
          >
            {countryConditions.map((name, index) => {
              return (
                <option
                  key={index}
                  value={name.Key}
                  name={`${name.LocalizedName},${name.AdministrativeArea.LocalizedName}`}
                >
                  {name.LocalizedName},{name.AdministrativeArea.LocalizedName},
                  {name.Country.LocalizedName}
                </option>
              );
            })}
          </select>
        ) : null}
      </div>

      {weatherConditions.length === 1 ? (
        <Card variant="outlined" className="cardImage">
          <div className="currentWeather">
            <h4>Current Weather</h4>
            <p>{weatherConditions[0].LocalObservationDateTime}</p>
          </div>
          <Divider />

          <div className="currentWeather">
            {weatherConditions[0].WeatherIcon === 1 ||
            weatherConditions[0].WeatherIcon === 2 ||
            weatherConditions[0].WeatherIcon === 3 ? (
              <FontAwesomeIcon icon={faSun} />
            ) : weatherConditions[0].WeatherIcon === 4 ? (
              <FontAwesomeIcon icon={faCloudSun} />
            ) : weatherConditions[0].WeatherIcon === 38 &&
              weatherConditions[0].IsDayTime ? (
              <FontAwesomeIcon icon={faCloudSun} />
            ) : weatherConditions[0].WeatherIcon === 38 &&
              !weatherConditions[0].IsDayTime ? (
              <FontAwesomeIcon icon={faCloudMoon} />
            ) : weatherConditions[0].WeatherIcon === 7 ||
              weatherConditions[0].WeatherIcon === 6 ? (
              <FontAwesomeIcon icon={faCloud} />
            ) : weatherConditions[0].WeatherIcon === 12 ? (
              <FontAwesomeIcon icon={faCloudRain} />
            ) : null}

            <h1>{weatherConditions[0].Temperature.Metric.Value}C</h1>
            <p>{weatherConditions[0].WeatherText}</p>
          </div>
        </Card>
      ) : null}
      <div className="hystosryCard">
        <>{countryNames.map((data) => data)}</>
        {PreviousData.map((data) => (
          <ShowingHystory data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
