import _get from 'lodash/get';
import _head from 'lodash/head';
import {weatherCodes} from './weather.constants';

const toCelcius = f => 5 * ((f - 32) / 9);

export const getTemparatureList = (weather) => {
  const allTemp = _get(weather, 'main', {});
  return {
    feelsLike: toCelcius(_get(allTemp, 'feels_like', 0)),
    currentTemp: toCelcius(_get(allTemp, 'temp', 0)),
    tempMax: toCelcius(_get(allTemp, 'temp_max', 0)),
    tempMin: toCelcius(_get(allTemp, 'temp_min', 0)),
    humidity: _get(allTemp, 'humidity', 0)
  }
};

export const getForcastType = (data) => {
  const weather = _head(_get(data, 'weather'));
  return {
    description: _get(weather, 'description'),
    forcast: weatherCodes[_get(weather, 'id')]
  }
};

export const getLocationData = weather => ({ location: _get(weather, 'name') });