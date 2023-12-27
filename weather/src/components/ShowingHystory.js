import React from 'react';
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
function ShowingHystory({ data }) {
  return (
    <div className="card">
      <button>X</button>
      <div className="front">{data.Link.split('/')[5]}</div>
      <div className="back">
        <div className="currentWeather">
          <span>
            {data.WeatherIcon === 1 ||
            data.WeatherIcon === 2 ||
            data.WeatherIcon === 3 ? (
              <FontAwesomeIcon icon={faSun} />
            ) : data.WeatherIcon === 4 ? (
              <FontAwesomeIcon icon={faCloudSun} />
            ) : data.WeatherIcon === 38 && data.IsDayTime ? (
              <FontAwesomeIcon icon={faCloudSun} />
            ) : data.WeatherIcon === 38 && !data.IsDayTime ? (
              <FontAwesomeIcon icon={faCloudMoon} />
            ) : data.WeatherIcon === 7 || data.WeatherIcon === 6 ? (
              <FontAwesomeIcon icon={faCloud} />
            ) : data.WeatherIcon === 12 ? (
              <FontAwesomeIcon icon={faCloudRain} />
            ) : null}
          </span>
          <h1>{data.Temperature.Metric.Value}C</h1>
          <p>{data.WeatherText}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowingHystory;
