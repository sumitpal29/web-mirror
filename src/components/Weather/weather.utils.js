import _get from 'lodash/get';
import _head from 'lodash/head';
import {weatherCodes} from './weather.constants';

export const getTemparature = (weather) => {

}

export const getForcastType = (data) => {
  const weather = _head(_get(data, 'weather'));
  return {
    description: _get(weather, 'description'),
    forcast: weatherCodes[_get(weather, 'id')]
  }
}